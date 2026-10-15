#!/usr/bin/env sh
set -eu

if docker compose version >/dev/null 2>&1; then
  compose="docker compose"
elif docker-compose version >/dev/null 2>&1; then
  compose="docker-compose"
else
  echo "Docker Compose is required to validate the Hostinger deployment contract" >&2
  exit 1
fi

compose_output="${TMPDIR:-/tmp}/nadeeda-production-compose.json"
$compose -f docker-compose.production.yml config --format json > "$compose_output"

python3 - "$compose_output" <<'PY'
import json
from pathlib import Path
import sys

with open(sys.argv[1], encoding="utf-8") as source:
    compose = json.load(source)

assert compose.get("name") == "nadeeda-coming-soon"
assert set(compose["services"]) == {"web"}

web = compose["services"]["web"]
assert not web.get("ports")
assert web["expose"] == ["3000"]
assert set(web["networks"]) == {"application"}
assert web["build"]["context"] == str(Path.cwd())
assert web["build"]["dockerfile"] == "Dockerfile"

labels = web["labels"]
assert labels["traefik.enable"] == "true"
assert labels["traefik.http.routers.nadeeda.rule"] == "Host(`nadeeda.com`)"
assert labels["traefik.http.routers.nadeeda.entrypoints"] == "websecure"
assert labels["traefik.http.routers.nadeeda.tls"] == "true"
assert labels["traefik.http.routers.nadeeda.tls.certresolver"] == "letsencrypt"
assert labels["traefik.http.routers.nadeeda.service"] == "nadeeda"
assert labels["traefik.http.routers.nadeeda-www.rule"] == "Host(`www.nadeeda.com`)"
assert labels["traefik.http.routers.nadeeda-www.entrypoints"] == "websecure"
assert labels["traefik.http.routers.nadeeda-www.tls"] == "true"
assert labels["traefik.http.routers.nadeeda-www.tls.certresolver"] == "letsencrypt"
assert labels["traefik.http.routers.nadeeda-www.service"] == "nadeeda"
assert labels["traefik.http.routers.nadeeda-www.middlewares"] == "nadeeda-www-redirect"
assert labels["traefik.http.middlewares.nadeeda-www-redirect.redirectregex.regex"] == r"^https?://www[.]nadeeda[.]com/(.*)"
assert labels["traefik.http.middlewares.nadeeda-www-redirect.redirectregex.replacement"] == "https://nadeeda.com/$${1}"
assert labels["traefik.http.middlewares.nadeeda-www-redirect.redirectregex.permanent"] == "true"
assert labels["traefik.http.services.nadeeda.loadbalancer.server.port"] == "3000"
assert "traefik.docker.network" not in labels

assert set(compose["networks"]) == {"application"}
assert not any(network.get("external") for network in compose["networks"].values())
PY

echo "Hostinger deployment contract validated"
