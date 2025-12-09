import { useEffect, useState } from "react"
import "./Workouts.css"
import axios from "axios"
import { useUser } from "../../contexts/UserContext"
import QtySelector from "../../Components/QtySelector/QtySelector"

export default function Workouts() {
    const [selected, setSelected] = useState(0)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const { user } = useUser()
    const [kg, setKg] = useState(50)
    const [reps, setReps] = useState(5)
    const [selectedExercise, setSelectedExercise] = useState()
    const [date, setDate] = useState()

    // needed for filter
    const [loadedExercises, setLoadedExercises] = useState(["fake exercise", "second"])

    function loadExercises(){
        let url = "https://wger.de/api/v2/exerciseinfo/?language__code=2"
        if (selected > 0){
            url  += `?category=${selected}`
        }
        alert(url)
    }
    useEffect(loadExercises, [selected])

    const exerciseOptions = loadedExercises.map(ex => <option value={ex}>{ex}</option>)
    function getCategories() {
        const api_endpoint = "https://wger.de/api/v2/exercisecategory/"
        axios.get(api_endpoint)
            .then(res => {

                setCategories(
                    [
                        { id: 0, "name": "All" },
                        ...res.data.results
                    ]
                );
            })
            .catch(err => {
                setError(err?.response?.data?.detail || "Error Occured")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(getCategories, []);

    if (loading) {
        return <p>Loading Filters...</p>
    }
    if (error) {
        return <p>its all jover</p>
    }

    const filterBtns = categories.map((cat => {
        return <button className={`Category-Btn ${selected === cat.id ? "active" : null}`} onClick={() => setSelected(cat.id)}>{cat.name}</button>
    }))


    return (
        <div className="Workout-Creator">
            <form>
                <div className="Categories-Container">
                    {filterBtns}
                </div>
                <select className="excercise-dropdown" value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)} required>
                    {exerciseOptions}
                </select>
                {selectedExercise}
                <input type="date" required onChage={(e) => setDate(e.target.value)} value={date} />
                {date}
                {/* qty selecter for kg */}
                {/* qty selector for reps */}
                <QtySelector num={kg} setNum={setKg} unit={"Kg"} step={2.5} />
                <QtySelector num={reps} setNum={setReps} unit={reps > 1 ? "Reps" : "Rep"} step={1} />
                <button type="submit" className="primary-btn">ADD</button>
            </form>
        </div>
    )
}