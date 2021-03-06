FROM node:carbon

# Upgrade OS dependencies
RUN apt-get update && apt-get upgrade -y

# Set the working directory to the location of our app
WORKDIR /opt/app

#Timezone
RUN echo "Europe/Berlin" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

# Copy Node.js App dependency manifest
COPY package.json ./package.json
# Install Node.js dependencies
RUN npm install
# RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
# Copy our app from the hard drive to the working direcotry in the docker image
COPY ./ ./
# Build the App inside the image
RUN npm run build

# Default port for this App Skeleton, will be exposed when -P specified
EXPOSE 3000

# using array notation causes node to be PID1 and will not exit properly. Without the array notation the shell forwards the sigterm correctly. 
CMD ["node", "server.js"]
#CMD node server.js
