import React from 'react';
import { Link } from 'react-router-dom';
import './sign-in.css';

const SignIn = () => {
  return (
    <div className="signin-body">
    <div className='sign-in'>
        <form className='signin-form'>
            <h1>Have an account already</h1>
            <h3>Sign In</h3>
            <label for="email">Email</label>
            <input name="email" type="email" placeholder='Eg.example@email.com'/>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder='Eg.*********'/>
            <label for="project">Project Name</label>
            <input name="text" type="text" placeholder='Eg.ChatScrum'/>
            <Link to="/scrumboard"><button>Sign In</button></Link>
        </form>
        <p className='sign-up-link'>Don't have an account? <Link to="/signup" style={{color:'#fff'}}>Sign up</Link></p>
        <p><Link to="/" style={{color:'#fff', textDecoration: 'none'}}>Back to Home</Link></p>
    </div>
    </div>
  )
}

export default SignIn;