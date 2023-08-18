import React from 'react';



function HomePage() {


    // define handlers
    const handleLogin = (event) => {
        console.log('Login successfully~');
    }


    const handleSignup = (event) => {
        console.log('Sign up successfully~');
    }


    // return page:
    return (
        <div>
            <h1>Welcome to our website</h1>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}







export default HomePage;
