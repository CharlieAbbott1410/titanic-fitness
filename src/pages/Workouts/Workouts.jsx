import { useEffect, useState } from "react"
import "./Workouts.css"
import axios from "axios"

export default function Workouts() {
    const [selected, setSelected] = useState(0)
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    function getCategories() {
        const api_endpoint = "https://wger.de/api/v2/exercisecategory/"
        axios.get(api_endpoint)
            .then(res => {

                setCategories(
                    [
                        {id: 0, "name": "All"},
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
        return <button className={`Category-Btn ${selected === cat.id ? "active" : null}`} onClick={() => setSelected(cat.id) }>{cat.name}</button>
    }))


    return (
        <>
            <div className="Categories-Container">
                {filterBtns}
            </div>
        </>
    )
}