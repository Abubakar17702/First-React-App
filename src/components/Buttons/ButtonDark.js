import React from 'react'

export  const ButtonDark = ({bg, text, icon}) => {
    // Destructure
    // const {bg, text, icon} = props
  return (
    <div>
      <button className={`btn btn-${bg ?bg : "success"}`}><i className={`${icon}`}></i>{text ? text : "Enter Text"}</button>
    </div>
  )
}
