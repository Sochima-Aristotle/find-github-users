import React from 'react'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="text-8xl font-bold mb-8">
            <h1>404</h1>
          </div>
          <h2>Ooops page not found</h2>
          
          <Link to='/' className='btn btn-primary btn-lg px-3 mt-4'><FaHome /> Back to home</Link>
        </div>
      </div>
    </div>
  )
}

export default Notfound