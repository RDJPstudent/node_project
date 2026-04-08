#use node base image
FROM node:22-alpine

# set working directory
WORKDIR /app

# copy the package.json contents
# the * is a wild card to increase "grab(?)
COPY package*.json ./

# install the dependencies
RUN npm install
RUN npm install -g nodemon
# copy the rest of the application code
# all files and folders on TWO levels
COPY . .

#explose the port that nodejs runs on for the container to run
EXPOSE 3000

# run the application
CMD ["nodemon", "app.js"]
#ran as a whole