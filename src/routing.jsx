import {Routes, Route} from "react-router"
import Home from "./pages/Home/Home"
import Workouts from "./pages/Workouts/Workouts"
import Auth from "./pages/Auth/Auth"
import ArticlePage from "./pages/ArticlesPage/ArticlesPage"

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Workouts" element={<Workouts/>} />
            <Route path="/Auth" element={<Auth/>} />
            <Route path="/article/:slug" element={<ArticlePage/>} />
        </Routes>
    )
}