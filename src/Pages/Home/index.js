import React from 'react'

import Hero from "./Hero"
import Services from "./Services"
import Fruits from './Fruits'
import Countries from './Countries'
import Events from './Events'

export default function index() {
  return (
    <>
      <Hero />
      <Services />
      <Countries />
      <Events />
      <Fruits />
    </>
  )
}
