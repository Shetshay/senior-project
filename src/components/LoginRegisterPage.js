import React, { useState } from 'react';
import './LoginRegisterPage.css'; // Import CSS file for styling

const LoginRegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Handle login
        } else {
            // Handle register
        }
    };

    return (
        <div className="login-register-container"> {/* Add a container class */}
            <div className="login-register-card"> {/* Add a card class */}
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-text"
                        />
                        <label className="input-label">Email</label>
                    </div>
                    <br />
                    <div className="input-wrapper">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-text"
                        />
                        <label className="input-label">Password</label>
                    </div>
                    <br />
                    <button className="beautiful-button" type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Register here." : 'Already have an account? Login here.'}
                </p>
            </div>
        </div>
    );
};

export default LoginRegisterPage;
