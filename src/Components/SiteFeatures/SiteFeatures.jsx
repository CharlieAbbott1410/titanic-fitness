import "./SiteFeatures.css"
import {Link} from "react-router"
import {useState} from "react"
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
    const url = "http://127.0.0.1:8001/auth/articles"

    function loadThumbnails(){
        axios.get(url)
        .then((res) => {
            //This is the code that runs when we get a good response
            alert(JSON.stringify(res))
        })
        .catch((err)=> {
            //This is the code that runs when something goes wrong
            alert(err)
        })
    }

    loadThumbnails()


    return(
        <div className="features-section">
            <div className="heading-box">
                <h4>Gym is just the tip of the iceberg</h4>
                <h5>Hit the books</h5>
            </div>
            <div className="feature-container">
                <FeatureThumbnail title="Sleep" description="And why its over rated" link="/" />
                <FeatureThumbnail title="Nutrition" description="Why Wendy's and Monster Energy are optimal nutrition" link="/" />
                <FeatureThumbnail title="Mewing" description="Don't stop the streak" link="/" />
                <FeatureThumbnail title="Leg Day" description="To Do or Not to Do, That is the Question" link="/" />
                <FeatureThumbnail title="Swimming" description="Could be useful..." link="/" />
                <FeatureThumbnail title="Rest times" description="A year between sets could be the optimal timing" link="/" />
            </div>
        </div>
    )
}