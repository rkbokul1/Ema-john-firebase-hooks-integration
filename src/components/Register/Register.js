import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign up</h2>
                    <form >
                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="pass">Password:</label>
                            <input type="password" name="pass" id="pass" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="con-pass">Confirm Password:</label>
                            <input type="password" name="con-pass" id="con-pass" required/>
                        </div>

                        <input className='submit' type="submit" value="Signup" />
                    </form>

                    <p>
                        Already have an account!? <Link className='create-link' to='/login'>log in</Link>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Register;