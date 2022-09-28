import React from 'react';
import './sign-up.css';
import content from '../../static/formdata';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  fullname: yup.string().required("fullname is required").min(6),
  email: yup.string().required("please enter a valid email"),
  password: yup.string().required("please enter a password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  "Must contain 8 characters, 1 upper & lower, 1 number & 1 special character")
})

const SignUp = () => {
  const {register, handleSubmit, formState: { errors }} = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data) =>{
    console.log(data);
    console.log("successfully signed up")
  }
  return (
    <div className="signup-body">
    <div className="sign-up">
        <form className='signup-form' onSubmit={handleSubmit(onSubmit)}>
            <h1>Don't have an account?</h1>
            <h3>Sign up here!</h3>
            {content.inputs.map((input, key) => (
              <div key={key}>
                <label htmlFor={input.name}>{input.label}</label>
                <input {...register(input.name)} type={input.type} placeholder={input.placeholder}/>
                <p className='errormessage'>{errors[input.name]?.message}</p>
              </div>
            ))}

            <label htmlFor="options">User Type</label>
            <select {...register("options")}>
                <option value="Developer">Developer</option>
                <option value="Owner">Owner</option>
            </select>
            <button>SIGN UP</button>
        </form>
        <p className='sign-in-link'>Have an account? <Link to="/signin" style={{color:'#fff'}}>Sign In</Link></p>
        <p><Link to="/" style={{color:'#fff', textDecoration: 'none'}}>Back to Home</Link></p>
    </div>
    </div>
  )
}

export default SignUp;