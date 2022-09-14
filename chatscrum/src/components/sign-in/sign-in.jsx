import React from 'react';
import './sign-in.css';

const SignIn = () => {
  return (
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
            <button>Sign In</button>
        </form>
        <p className='sign-up-link'>Don't have an account? Sign up</p>
    </div>
  )
}

export default SignIn;