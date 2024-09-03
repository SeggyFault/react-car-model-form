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
      <h1>Choose your favourite car model:</h1>
      <p>You have chosen: {car.year} {car.manufacturer} {car.model}</p>
      <div>
        <label for="year">Year:</label>
        <input id="year" type="number" value={car.year} onChange={handleYearChange} />

        <label for="manufacturer">Manufacturer:</label>
        <input id="manufacturer" type="text" value={car.manufacturer} onChange={handleManufacturerChange} />

        <label for="model">Model:</label>
        <input id="model" type="text" value={car.model} onChange={handleModelChange} />
      </div>
      
    </div>
  )
}

export default Form;