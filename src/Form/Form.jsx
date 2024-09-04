import {useState} from "react";
import ModificationsList from "../ModificationsList/ModificationsList";

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
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="p-4 bg-gray-200 border border-gray-500" action="post">
        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 text-xl">Your favourite car model:</legend>
          <p className="flex gap-3">
            <input className="px-2 border" id="year" type="number" value={car.year} onChange={handleYearChange} />
            <label for="year">Year</label>
          </p>
          <p className="flex gap-3">
            <input className="px-2 border" id="manufacturer" type="text" value={car.manufacturer} onChange={handleManufacturerChange} />
            <label for="manufacturer">Manufacturer</label>
          </p>
          <p className="flex gap-3">
            <input className="px-2 border" id="model" type="text" value={car.model} onChange={handleModelChange} />
            <label for="model">Model</label>
          </p>
        </fieldset>
      </form>
      <h1 className="mt-6 text-3xl">You have chosen: <span className="text-blue-400">{car.year} {car.manufacturer} {car.model}</span></h1>
      <ModificationsList/>
    </div>
  )
}

export default Form;