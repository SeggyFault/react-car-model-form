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

   function handleDeleteModification(index) {
    setModifications(modifications.filter((_, i) => i !== index));
  }
  
  
  return(
    <div className="flex flex-col gap-4 p-4 m-6 bg-blue-200 border border-gray-600">
      <h2 className="mb-2 text-xl">Modifications:</h2>
      <ul>
        {modifications.map((modification, index) => <li className="flex items-center justify-between " key={index}><span>{modification}</span><button className="px-4 py-2 text-red-600" onClick={() => handleDeleteModification(index)}><FaDeleteLeft /></button></li>)}
      </ul>
      <div className="flex">
        <input className="pl-2" id="inputField" type="text" placeholder="Write your mod"/>
        <button className="px-4 py-2 text-white bg-green-600" onClick={handleAddModification}><IoAddCircleSharp /></button>
      </div>
    </div>
  )
}

export default ModificationsList;