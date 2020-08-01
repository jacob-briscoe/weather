import React, {useState} from 'react';
import * as R from 'ramda';
import AddCity from '../components/AddCity';
import CityWeatherList from '../components/CityWeatherList';

const Weather = () => {
  const [cities, setCities] = useState([]);

  const addCityHandler = city =>
    R.pipe(
      // TODO: get actual weather data, if it doesnt already exist
      c => ({name: c, temp: 70, high: 75, low: 65}),
      R.partialRight(R.prepend, [cities]),
      setCities
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

export default Weather;
