FROM node
WORKDIR /src
COPY package*.json .
COPY --chown=node:node . ./
RUN npm install
EXPOSE 4000
CMD npm rum dev