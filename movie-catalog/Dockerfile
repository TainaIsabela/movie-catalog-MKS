FROM node:16.17.0
WORKDIR /usr/src/app/movie-catalog
COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"] /usr/src/app/movie-catalog
RUN npm install
COPY . /usr/src/app/movie-catalog
EXPOSE 3000
CMD npm run start