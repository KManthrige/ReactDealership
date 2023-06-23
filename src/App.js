import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [inventory, setInventory] = useState([]);
  const [addNewCar, setAddNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    fuel: "",
    cost: "",
  })

  const placeholder = (event) => {
    setAddNewCar((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }
  // alternative option:
  // const placeholder = (event) => {
  //   setAddNewCar((prevState) => ({
  //     ...prevState,
  //     brand: event.target.value
  //   }))
  // }
  // const placeholder2 = (event) => {
  //   setAddNewCar((prevState) => ({
  //     ...prevState,
  //     model: event.target.value
  //   }))
  // }

//add object to the inventory array
  const newCar = () => {
    setInventory((prevState) => ([
      ...prevState,
      addNewCar
    ]))
  }

  //clear the inputs
  const clearInputs = () => {
    console.log("clear btn")
    setAddNewCar((prevState) => ({
      ...prevState,
      brand: "",
      model: "",
      year: "",
      color: "",
      fuel: "",
      cost: "",
    }));
  };

  useEffect(() => {
    console.log("add new car", addNewCar)
  }, [addNewCar])

  useEffect(() => {
    console.log("inventory", inventory)
  }, [inventory])

  return (
    <div>
      <h1>Car Dealership</h1>
      <h3>Reconditioned Cars, Unbelievable Prices!</h3>
      <p>Enter new cars to the inventory using the form below.</p>
      <br/>
      <div className="insert">
        <input name="brand" className="brand" placeholder="Brand" onChange={placeholder}/>
        <input name="model" className="model" placeholder="Model" onChange={placeholder}></input>
        <input name="year" className="year" placeholder="Year" onChange={placeholder}></input>
        <input name="color" className="color" placeholder="Color" onChange={placeholder}></input>
        <input name="fuel" className="fuel" placeholder="Fuel Type" onChange={placeholder}></input>
        <input name="cost" className="cost" placeholder="Cost" onChange={placeholder}></input>

      </div>
      <button className="btn" onClick={newCar}>Add to Inventory</button>
      <button className="btn" onClick={clearInputs}>Clear All</button>
      <button className="btn">Remove from Inventory</button>

      <table className="inv-titles">
        <thead>
          <tr >
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Fuel Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.fuel}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
