import '../styles/login.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {LoginLoading} from './Skeleton'


const Login = (props) => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })
    let componentMounted = true;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }


    const { email, password } = login;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email.length == 0) {
            setError(true)
        }
        console.log(email, password)
        setLogin('')
    }

    useEffect(() => {
        const onLoad = (event) => {
            setLoading(true)
            if (componentMounted) {
                setLoading(false)
            }
            return () => {
                componentMounted = false;
            }
        }

        onLoad()
    }, [])



    const ShowLogin = () => {
        return (
            <div className="login-container">
                <div className="login-wrapper">
                    <h1>Login To Your Account</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="login-email">
                            <input type="email" name="email" value={email || ''} placeholder="Email" onChange={handleChange} required={true} />
                            {error && email.length <= 0 ? <p>Email can't be empty</p> : ''}
                        </div>

                        <input type="password" name='password' value={password || ''} placeholder="Password" onChange={handleChange} required={true} />
                        <div className="login-button">
                            <button>Sign In</button>
                        </div>

                    </form>
                    <div className="new_account">
                        <p><NavLink to='/register'>Create New Account</NavLink> </p>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            {loading ? <LoginLoading/>: <ShowLogin/>}
        </>
    )
}

export default Login