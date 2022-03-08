# Clone of Happy Cow website 🐄 | client side

[<img src="https://img.shields.io/badge/last%20updated-march%202022-yellow">](https://img.shields.io/badge/last%20updated-march%202022-yellow)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/works-on-my-machine.svg)](https://forthebadge.com)

Responsive - non SPA - clone of the [Happy Cow website](https://www.happycow.net/) bootstrapped with React Library. Deployed version available [here](https://happy-cow-clone-eld.netlify.app)
Connected to a [backend](https://github.com/Emlych/happy-cow-clone-back) developped with node.js.

⚠️ As it is only a clone, data are not up to date and are localised in Paris and its suburbs.

## Features

✔️ Homepage that displays nearest restaurants and top 10 restaurants<br>
✔️ Search bar with Autocomplete option<br>
✔️ Authentication system based on cookie token<br>
✔️ Add and remove favorites to your profile page<br>
✔️ Page per restaurant<br>

## Dependencies

- react-router-dom
- axios
- js-cookie
- fontawesome
- @emotion/material
- @mui/material
- google-map-react

## Future features to work on

- Implement conversion of latitude and longitude into web Mercator with [arcgis webMercatorUtils](https://developers.arcgis.com/javascript/3/jsapi/esri.geometry.webmercatorutils-amd.html)
- Page that displays a given number of restaurants surrounding the researched one
- Display "all" restaurants and go through them with pagination

## How to install and run the project

Clone this repository :

`git clone https://github.com/Emlych/happy-cow-clone-client`

`cd happy-cow-clone-clientt`

Install dependencies :

`yarn add `

When installation is complet, run :

`yarn start`
