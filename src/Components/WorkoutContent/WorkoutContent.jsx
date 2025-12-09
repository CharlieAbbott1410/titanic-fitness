import "./WorkoutContent.css"
import { useState,useEffect, use } from "react"
import { useUser } from "../../contexts/UserContext"

export default function WorkoutContent(){

    const {user} = useUser()
    const [kg, setKg] = useState(50)
    const [reps, setReps] = useState(5)
    const [selectedExercise, setSelectedExercise] = useState()
    const [date, setDate] = useState()

    // needed for filter
    const [filter, setFilter] = useState()
    const [loadedExercises, setLoadedExercises] = useState(["fake exercise"])

    const exerciseOptions = loadedExercises.map( ex => <option value={ex}>{ex}</option>)
    return(
        <div className="workouts-pages">
            this is the workouts pages
            {/* filter will go here */}
            <select className="excercise-dropdown">
                {exerciseOptions}
            </select>
            {/* qty selecter for kg */}
            {/* qty selector for reps */}
            <button type="submit" className="primary-btn">ADD</button>
        </div>
    )
}