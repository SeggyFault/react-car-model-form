function Form() {
  return(
    <div>
      <h1>Choose your favourite car model:</h1>
      <div>
        <label for="year">Year:</label>
        <input id="year" type="number" placeholder="1963" />

        <label for="manufacturer">Manufacturer:</label>
        <input id="manufacturer" type="text"  placeholder="Buick" />

        <label for="model">Model:</label>
        <input id="model" type="text" placeholder="Riviera" />
      </div>
      <h2>{`You have chosen`}</h2>
    </div>
  )
}

export default Form;