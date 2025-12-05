import "./Auth.css"
import HeroBanner from "../../Components/HeroBanner/HeroBanner"
import AuthImage1 from "../../assets/AuthBanner_01.png"
import { useState } from "react"
import { useUser } from "../../contexts/UserContext"
import axios from "axios"

function LoginForm({ toggle, header }) {
    const {login} = useUser();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function loginUser(event){
        event.preventDefault()
        const endpoint = "http://127.0.0.1:8001/auth/login"
        axios.post(endpoint, {
            "password" : password,
            "email" : email,
        })
        .then(res => {
            login(res.data)
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Error Occured")
        })}

    return (
        <form className="auth-form" onSubmit={loginUser}>
            <h1>Unsinkable gains await</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text"></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="text"></input>
            {error ? <p>{error}</p> : null}
            <div className="button-rows">
                <button className="primary-btn main-btn" >LOG IN</button>
                <div className="page-change">
                    <h2>Don't have an account?</h2>
                    <button onClick={toggle}>Login</button>
                </div>
            </div>
        </form>
    )
}
function RegisterForm({ toggle }) {
    const {user, login} = useUser();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function registerUser(event){
        event.preventDefault()
        const endpoint = "http://127.0.0.1:8001/auth/register"
        axios.post(endpoint, {
            "username" : username,
            "password" : password,
            "email" : email,
        })
        .then(res => {
            login(res.data)
        })
        .catch(err => {
            setError(err?.response?.data?.detail || "Error Occured")
        })
    }
    return (
        <form className="auth-form" onSubmit={registerUser}>
            <h1>Unsinkable Gains Await</h1>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text"></input>
            <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="text"></input>
            <input placeholder="Display Name" value={username} onChange={(e) => setUsername(e.target.value)} type="text"></input>
            {error ? <p>{error}</p> : null}
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