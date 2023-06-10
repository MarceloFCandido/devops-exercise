FROM public.ecr.aws/docker/library/node:18.16.0-alpine3.18 AS development
RUN apk add dumb-init
ENV NODE_ENV development
WORKDIR /app
ADD package.json /app/
ADD . /app/
RUN npm i -g pnpm && pnpm install --lockfile-only
EXPOSE 3000
CMD ["dumb-init", "npm", "start:dev"]

FROM public.ecr.aws/docker/library/node:18.16.0-alpine3.18 AS production
RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /app
ADD package.json /app/
ADD . /app/
RUN npm i -g pnpm && pnpm install --prod --lockfile-only
EXPOSE 3000
CMD ["dumb-init", "npm", "start:prod"]
