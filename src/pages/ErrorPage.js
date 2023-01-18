import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <section className='error-page section'>
      <div className='error-container'> 
       <h1>oops! it's a dead end</h1>
       <Link to="/" className="btn btn-primary">

       </Link>

      </div>

    ErrorPage</section>
  )
}

export default ErrorPage