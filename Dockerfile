FROM node:14.4.0-alpine

ENV NODE_ENV=production
ENV PORT=4000
ENV CORS=*
ENV MONGO_USER=cyasam7
ENV MONGO_PASSWORD=Cyasam86&
ENV MONGO_HOST=cluster0.3v0ya.gcp.mongodb.net
ENV MONGO_DB=productos
ENV SECRETO=secretojajajaxd
ENV MICROSERVICIO_URL=http://52.13.56.149:4000/


WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 4000

RUN chown -R node /app
USER node
CMD ["npm", "start"] 