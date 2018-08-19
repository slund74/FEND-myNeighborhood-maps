# Udacity Front-End Web Developer
# Nanodegree Program (FEND)

# Neighborhood Map (React)

## About
  This site displays wine tasting venues in the California Central Valley.  The user ia able to narrow down the choices between retail loactions and wineries.  The user is able to get the address and temperature of the loaction.

## Installation:

Clone from: https://github.com/slund74/FEND-myNeighborhood-maps.git

Run the following commands from the application directory (node.js is a prerequisite)
  - npm install
  - npm install --save react-google-maps
  - npm start
  - Navigate to http://localhost:3000/

## Resources used:
  - react-google-maps (https://github.com/tomchentw/react-google-maps)
  - Bootstrap (https://getbootstrap.com/)
  - OpenWeatherMap Weather API (https://openweathermap.org/api)

## Production Build:
  - Run the following command to build
    - npm build
  - The production build is located in the 'build' directory, you can run npm start from there
  - The main landing page is index.html
  - Note: The directory structure needs to be maintained in the proper child configuration

## Service Worker
  The default react service worker only works when the app is ran in production mode.