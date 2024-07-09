import React from 'react'

export default function Fruits() {
    const fruits = ["Apple", "Mango", "Grapes", "Peach", "Orange", "Banana"]
    const users = {firstName: "Muhammad", lastName: "Abubakar", age:21, city: "Faisalabad"}
    // Destructuring
    const {firstName, lastName, age, city} = users

    // Combine Two Objects
    const cars = { brand: "Ford", model: "Mustang", color: "red"}
    console.log(cars)
    const updatedCars = { type: "car", year: "2024", color: "yellow"}
    console.log(updatedCars)
    const myUpdatedCars = {...cars, ...updatedCars}
    console.log(myUpdatedCars)

    // Grade
    let cgpa = 3.5;

  return (
    <>
      <div className="fruits">
        <div className="container p-3">
            <div className="row">
                <div className="col">
              <h1 className='text-center'>It's Fruits Section.</h1>
              <p className='text-center fw-bold'>User Name: {firstName} {lastName} , Age :{age} and City: {city}</p>
              <p className='text-center fw-bold'>{cgpa >= 3 ? "Brilliant" : "Passed"}</p>
                    <ul>
                        {
                            fruits.map((fruit, i)=>{
                                return <li className='text-center text-danger' key={fruit}>{fruit}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
