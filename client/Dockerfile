FROM node:16

# Create app directory
WORKDIR /usr/src/app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

RUN npm install
# If you are building your code for production
# RUN npm ci--only=production

# Bundle app source

CMD [ "npm", "start" ]

# docker build . -t runnation-frontend
# docker run -p 49161:3000 -d runnation-frontend
# docker push kubabujak/yelpcamp:yelpcamp ??????
