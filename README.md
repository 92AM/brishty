# brishty [WIP]

Brishty is a simple web application that displays weather related details based on a searched location (i.e. a city), the site is using NextJS, TypeScript, ReactJS and Tailwind CSS for UI.

## Running locally

`npm run dev`

The app should start locally here : http://localhost:3000/

Example weather page : http://localhost:3000/weather/London

## Building in production

`next build && next start`

## Api support

To view the data returned by openweathermap.org visit : http://localhost:3000/api/weather?location=london 

Note : In order to get weather details of a different location just change the location, see below.
`http://localhost:3000/api/weather?location={ENTER_YOUR_LOCATION_HERE}`
