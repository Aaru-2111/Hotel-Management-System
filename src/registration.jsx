import React from 'react'
 import './registration.css';

const Registration = () => {
  return (
    <div className="Register">
      <div class="wrapper">
    <h2>Grand Hotel</h2>
    <form action="#">
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Enter your email" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div class="policy">
        <input type="checkbox" required />
        <h3>I accept all terms & condition</h3>
      </div>
      <div class="input-box button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div class="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

export default Registration
