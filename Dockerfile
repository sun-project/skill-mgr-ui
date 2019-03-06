FROM node:10-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn run build
ENV HOST 0.0.0.0
ENV EUREKA_HOST discovery
EXPOSE 3000
CMD ["yarn", "run", "start"]
