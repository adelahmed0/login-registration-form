import React, {useState} from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }
    return (
        <div className='auth-form-container'>
            <h2>Login</h2>
            <form className='login-form' onClick={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    Value={email}
                    placeholder='youremail@gmail.com'
                    id='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email'>Password</label>
                <input
                    type='password'
                    Value={password}
                    id='password'
                    placeholder='********'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account?
                Register
            </button>
        </div>
    );
}
