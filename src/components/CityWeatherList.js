import React from 'react';
import * as R from 'ramda';

const CityWeatherList = ({cities, onRemove}) => (
  R.map(city => (<CityWeather key={city.name} city={city} onRemove={onRemove}/>), cities)
);

const CityWeather = ({city, onRemove}) => (
  <div className="card m-2" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">{city.name}</h5>
      <h3 className="card-subtitle mb-2 text-muted">{city.temp}</h3>
      <p className="card-text">High: {city.high} Low: {city.low}</p>
      <button className="btn btn-link" onClick={() => onRemove(city.name)}>Remove</button>
    </div>
  </div>
);

export default CityWeatherList;