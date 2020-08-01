import React, {useState, useEffect} from 'react';
import * as R from 'ramda';

const AddCity = ({onAdd}) => {
  const [city, setCity] = useState('');
  const [addDisabled, setAddDisabled] = useState(true);

  const onSubmitHandler = event => {
    event.preventDefault();
    onAdd(city);
  };

  useEffect(() =>
    R.pipe(
      R.defaultTo(''),
      R.trim,
      s => s.length,
      R.gte(0),
      setAddDisabled
    )(city), [city]);

  return (
    <form className="form-inline" onSubmit={onSubmitHandler}>
      <label className="sr-only" htmlFor="inputCity">City</label>
      <input type="text" className="form-control mb-2 mr-sm-2" id="inputCity" placeholder="City" value={city}
             onChange={e => setCity(e.target.value)}/>
      <button type="submit" className="btn btn-primary mb-2" disabled={addDisabled}>Add</button>
    </form>
  );
};

export default AddCity;