import React from 'react';
import './sign-up.css';

const SignUp = () => {
  return (
    <div class="sign-up">
        
        <form className='signup-form'>
            <h1>Don't have an account?</h1>
            <h3>Sign up here!</h3>
            <label for="text">Full Name</label>
            <input name="text" type="text" placeholder='Full name'/>
            <label for="email">Email</label>
            <input name="email" type="email" placeholder='Eg. example@email.com'/>
            <label for="password">Password</label>
            <input name="password" type="password" placeholder='Eg.*********'/>

            <label for="options">User Type</label>
            <select id='options'>
                <option value="Developer">Developer</option>
                <option value="Owner">Owner</option>
            </select>
            <button>SIGN UP</button>
        </form>
        <p className='sign-in-link'>Have an account? Sign In</p>
    </div>
  )
}

export default SignUp;