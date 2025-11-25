import "./Auth.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"

function LoginForm({ toggle, header }) {
    return (
        <form className="auth-form">
            <h1>Unsinkable gains await</h1>
            <input placeholder="Email" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <div className="button-rows">
                <button className="primary-btn main-btn">LOG IN</button>
                <div className="page-change">
                    <h2>Don't have an account?</h2>
                    <button onClick={toggle}>Register</button>
                </div>
            </div>
        </form>
    )
}
function RegisterForm({ toggle }) {
    const {user, login} = useUser();

    function registerUser(){
        login({
            "username" : "goober",
            "email" : "goober@goobco.com"
        })
    }
    return (
        <form className="auth-form" onSubmit={registerUser}>
            <h1>Unsinkable Gains Await</h1>
            {user ? <h1>Logged in user: {user.username}</h1> : null}
            <input placeholder="Email" type="text"></input>
            <input placeholder="Password" type="text"></input>
            <input placeholder="Display Name" type="text"></input>
            <div className="button-rows">
                <button className="primary-btn main-btn">REGISTER NOW</button>
                <div className="page-change">
                    <h2>Already have an account?</h2>
                    <button onClick={toggle}>Login</button>
                </div>
            </div>
        </form>
    )
}


export default function Auth() {

    //If registerForm is true, dispaly register form, else display login form
    const [registerForm, setRegisterForm] = useState(true)
    function toggleForm() {
        setRegisterForm(!registerForm)
    }

    return (

        <div className="auth-layout">
            <HeroBanner image={AuthImage1} />
            <div className="auth-form-column">
                {registerForm ? <RegisterForm toggle={toggleForm} /> : <LoginForm toggle={toggleForm} />}
            </div>
        </div>
    )
}