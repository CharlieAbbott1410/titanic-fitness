import {Routes, Route} from "react-router"
import Home from "./pages/Home/Home"
import Workouts from "./pages/Workouts/Workouts"
import Auth from "./pages/Auth/Auth"

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Workouts" element={<Workouts/>} />
            <Route path="/Auth" element={<Auth/>} />
        </Routes>
    )
}