# brishty

Brishty is a web application that displays weather of a searched location (i.e. a city), the site is built using NextJS, TypeScript, ReactJS and Tailwind CSS for UI.

## Live link

https://www.brishty.net 

## Running

### Starting locally

`npm run dev`

The app should start locally here : http://localhost:3000/

Example weather page : http://localhost:3000/weather/Soho,%20GB

### Building in production

`npm run build && next start`

### Running lint / lint fix command

Running with Eslint : `npm run lint`

Fixing lint issues : `npm run lint:fix`

### Running tests

`npm run test`

## Third-party APIs used in Brishty

* OpenWeather : https://openweathermap.org/api 
* GeoDB Cities : https://rapidapi.com/wirefreethought/api/geodb-cities
* Algolia places (deprecated and not in use anymore) : https://community.algolia.com/places/ 
* Geoapify Autocomplete : https://www.geoapify.com/address-autocomplete 
* NY Times : https://developer.nytimes.com/docs/top-stories-product/1/overview 
