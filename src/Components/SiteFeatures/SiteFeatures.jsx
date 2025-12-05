import "./SiteFeatures.css"
import {Link} from "react-router"
import {useState, useEffect} from "react"
import axios from "axios"

function FeatureThumbnail({title,description,link}){
    return(
        <div className="feature-thumb">
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={link}>Read More</Link>
        </div>
    )
}

export default function SiteFeatures(){

    const [articleData, setArticleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    const url = "http://127.0.0.1:8001/public/articles"

    function loadThumbnails(){
        axios.get(url)
        .then((res) => {
            //This is the code that runs when we get a good response
            setArticleData(res.data)
            setLoading(false)
        })
        .catch((err)=> {
            //This is the code that runs when something goes wrong
            setError(err?.response?.data?.detail || "Error Occured")
            setLoading(false)
        })
    }

    
    useEffect(() => {
        loadThumbnails();
    }, [])

    let articles = null;
    if (loading){
        articles = <h1>Loading Articles...</h1>
    } else if(error){
        articles = <h1>There was an error!</h1>
    }
    else{
        articles = articleData.map(thumb => {
            return(<FeatureThumbnail title={thumb.title} description={thumb.description} link={thumb.link}/>)
        })
    }

    return(
        <div className="features-section">
            <div className="heading-box">
                <h4>Gym is just the tip of the iceberg</h4>
                <h5>Hit the books</h5>
            </div>
            <div className="feature-container">
                {articles}
            </div>
        </div>
    )
}