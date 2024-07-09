import React from 'react'
import { countries } from '../../data/countries'
import {ButtonDark} from '../../components/Buttons/ButtonDark'


export default function Countries() {
    return (
    <>
      <div className="fruits bg-secondary">
        <div className="container p-3">
            <div className="row">
                <div className="col text-center">
              <h1 className='text-center'>It's Countries Section.</h1>
                    <ul>
                        {
                            countries.map((country, i)=>{
                                return <li key={country}>{i+1}. {country}</li>
                            })
                        }
                    </ul>
                <div className="col"><ButtonDark bg="" text="Click Me" icon="fa-solid fa-arrow-right-from-bracket me-2"/></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
