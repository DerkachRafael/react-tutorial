import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Login = ({authenticate}) => (
    <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign In</p>
        <button onClick={()=> authenticate("Facebook")} className="facebook">
                Log In with FB
        </button>
    </nav>
)

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;