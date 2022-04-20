import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form >
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="pass">Password:</label>
                            <input type="password" name="pass" id="pass" required/>
                        </div>

                        <input className='submit' type="submit" value="login" />
                    </form>
                    
                    <p>
                        New to amazon? <Link className='create-link' to='/register'>Create an Account!</Link>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Login;