import React, {useState} from 'react';
import * as R from 'ramda';
import AddCity from '../components/AddCity';
import CityWeatherList from '../components/CityWeatherList';
import {getWeather, TEMP, HIGH, LOW} from '../repositories/WeatherMapRepository';

const Weather = () => {
  const [cities, setCities] = useState([]);

  const addCityHandler = city =>
    R.pipe(
      getWeather,
      R.otherwise(R.always(unknownReading(city))),
      R.andThen(d => d.data),
      R.andThen(d => ({
        name: city,
        temp: formatTemp(R.view(TEMP, d)),
        high: formatTemp(R.view(HIGH, d)),
        low: formatTemp(R.view(LOW, d))
      })),
      R.andThen(R.partialRight(R.prepend, [cities])),
      R.andThen(setCities)
    )(city);

  const removeCityHandler = cityName =>
    R.pipe(
      R.reject(R.propEq('name', cityName)),
      setCities
    )(cities);

  return (
    <div className="container">
      <div className="row justify-content-center border-bottom">
        <div>
          <h3 style={{display: 'inline'}}>Weather</h3><small
          className="font-weight-light ml-2">v{process.env.REACT_APP_VERSION}</small>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <AddCity onAdd={addCityHandler}/>
      </div>
      <div className="row justify-content-center">
        <CityWeatherList cities={cities} onRemove={removeCityHandler}/>
      </div>
    </div>
  );
};

const unknownReading = city => ({
  name: city,
  temp: '--',
  high: '--',
  low: '--',
});

const formatTemp = R.pipe(
  R.defaultTo(0),
  Math.round
);

export default Weather;
