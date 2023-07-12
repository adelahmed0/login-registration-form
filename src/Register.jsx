import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form className='register-form' onClick={handleSubmit}>
                <label htmlFor='name'>Full Name</label>
                <input
                    value={name}
                    name='name'
                    id='name'
                    placeholder='Full name'
                />
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
            <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login
                here.
            </button>
        </div>
    );
}
