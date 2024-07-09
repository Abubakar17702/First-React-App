import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container-fluid bg-dark p-2">
        <div className="col">
            <div className="row">
                <p className='text-center text-white mb-0'>&copy; Copyright <span id='year'>{year}</span>. All Rights Reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
