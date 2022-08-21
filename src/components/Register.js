import React from 'react'
import {NavLink} from 'react-router-dom'
import {useState, useRef} from 'react';
import '../styles/register.css'

const Register = () => {
    const[register, setRegister]=useState({
        name: '',
        surname:'',
        email:'',
        password:'',
        confirm_password:''

    })

    const handleChange = (event)=>{
        const{name, value}= event.target;
        setRegister((prev)=>{
            return{
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(name, surname, email, password)
        setRegister('')

    }

    const{name, surname, email, password, confirm_password}= register;

  return (
    <div className="register-container">
        <div className="register-wrapper">
            <h1>Sign Up For A New Account</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" name='name' value={name || ''} placeholder='Name' onChange={handleChange} required={true}/>
                <input type="text" name='surname' value={surname || ''} placeholder='Surname' onChange={handleChange} required={true} />
                <input type="email" name='email' value={email || ''} placeholder='Email' onChange={handleChange} required={true} />
                <input type="password" name='password' value={password || ''} placeholder='Password' onChange={handleChange} required={true} />
                <input type="password" name='confirm_password' value={confirm_password || ''} placeholder='Confirm Password' onChange={handleChange} required={true} />
                <div className='register-button'>
                    <button>Sign Up</button>
                </div>
                <div className='exist-account'>
                    <p><NavLink to ='/login'>Have An Account? Sign In Here.</NavLink></p> 
                </div>
            </form>

        </div>

    </div>
  )
}

export default Register