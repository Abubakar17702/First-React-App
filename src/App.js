import "./app.scss"
import React from 'react'

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle"


// Components
import Header from "./components/Header"
import Footer from "./components/Footer"


// Pages
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <Header />
    <main>
    <Home />
    </main>
    <Footer />
    </>
  )
}

export default App

