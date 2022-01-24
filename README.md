[![CI](https://github.com/tifenn-guillas/test-technique-angular/actions/workflows/main.yml/badge.svg)](https://github.com/tifenn-guillas/test-technique-angular/actions/workflows/main.yml)

# Test technique Angular

## Démonstration
L'application finale est visible à l'adresse suivante : http://tifenn-guillas.fr/test-technique-angular

## Lancer via Docker
```bash
docker run -it -p 4200:4200 tifennguillas/test-technique-angular ng serve --host=0.0.0.0 --disable-host-check --port 4200
```

## Installation en local
Nécessite **Node 14 LTS**.

```bash
yarn global add @angular/cli
ng config -g cli.packageManager yarn
ng config -g cli.warnings.versionMismatch false
yarn
ng serve --host=0.0.0.0 --disable-host-check --port 4200
```

Ou via Docker :
```bash
make install
make start
make stop
```

Allez sur la page http://localhost:4200/

## Lancer les tests
Nécessite **Chromium** pour lancer les tests.

```bash
ng test --no-watch
```

Ou :
```bash
make start
make test
make stop
```