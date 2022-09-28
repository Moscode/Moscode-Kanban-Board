import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home-body">
    <div className='homepage'>
    <h1>WELCOME TO CHATSCRUM</h1>
    <h4><Link to="/signup" style={{color:'#fff'}}>SIGN UP</Link></h4>
    <h4><Link to="/signin" style={{color:'#fff'}}>SIGN IN</Link></h4>
    </div>
    </div>
  )
}
