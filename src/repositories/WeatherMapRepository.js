import * as R from 'ramda';
const axios = require('axios').default;

const cityWeatherUrl = city => `${process.env.REACT_APP_WEATHERMAP_URI}?q=${encodeURI(city)}&units=imperial&APPID=${process.env.REACT_APP_WEATHERMAP_APPID}`;

export const getWeather = city => axios.get(cityWeatherUrl(city));

export const TEMP = R.lensPath(['main', 'temp']);
export const HIGH = R.lensPath(['main', 'temp_max']);
export const LOW = R.lensPath(['main', 'temp_min']);
