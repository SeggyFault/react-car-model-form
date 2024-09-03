import {useState} from "react";

function Form() {

  const [car, setCar] = useState({year: 1963, manufacturer: "Buick", model: "Riviera"});

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
  }

  function handleManufacturerChange(event){
    setCar(c => ({...c, manufacturer: event.target.value}));
  }

  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
  }

  return(
    <div>
      <form action="post">
        <fieldset>
          <legend>Your favourite car model:</legend>
          <p>
            <label for="year">Year:</label>
            <input id="year" type="number" value={car.year} onChange={handleYearChange} />
          </p>
          <p>
            <label for="manufacturer">Manufacturer:</label>
            <input id="manufacturer" type="text" value={car.manufacturer} onChange={handleManufacturerChange} />
          </p>
          <p>
            <label for="model">Model:</label>
            <input id="model" type="text" value={car.model} onChange={handleModelChange} />
          </p>
        </fieldset>
      </form>
      <h1>You have chosen: {car.year} {car.manufacturer} {car.model}</h1>
    </div>
  )
}

export default Form;