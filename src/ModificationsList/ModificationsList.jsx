import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";

function ModificationsList() {

  const [modifications, setModifications] = useState(["Leather Salon", "Car Stereos", "Dash Cams"]);
  
  function handleAddModification() {
    const inputField = document.getElementById("inputField");
    const inputFieldValue = inputField.value;
    inputField.value = "";
    setModifications(m => [...m, inputFieldValue]);
  }
  
  
  return(
    <div>
      <h2>Modifications:</h2>
      <ul>
        {modifications.map((modification, index) => <li key={index}>{modification}<button><FaDeleteLeft /></button></li>)}
      </ul>
      <input id="inputField" type="text" placeholder="Write your mod"/>
      <button onClick={handleAddModification}><IoAddCircleSharp /></button>
    </div>
  )
}

export default ModificationsList;