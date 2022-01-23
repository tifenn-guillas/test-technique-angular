FROM node:14-slim

ENV DEBIAN_FRONTEND=noninteractive

WORKDIR /project

# Yarn
RUN yarn global add @angular/cli
RUN ng config -g cli.packageManager yarn
RUN ng config -g cli.warnings.versionMismatch false

# Chromium
RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium
ENV CHROME_BIN=chromium

COPY . /project

CMD ["bash"]
