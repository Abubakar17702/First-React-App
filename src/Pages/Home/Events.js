import React from 'react'

export default function Events() {
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Form Submit Successfully")
    }
  return (
    <>
    <div className="fruits bg-danger">
      <div className="container p-3">
          <div className="row">
              <div className="col text-center">
            <h1 className='text-center'>It's Events Section.</h1>
            <form className="form-control" onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Text' className='col-8 m-3' required/> <br />
            <button className='btn btn-info'>Submit</button>
            </form>
            <p style={{color:"white", padding:"20px", textAlign:"left", fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequatur magnam mollitia harum, quam recusandae deserunt repellat iste repudiandae perspiciatis.</p>

              </div>
          </div>
      </div>
    </div>
  </>
  )
}
