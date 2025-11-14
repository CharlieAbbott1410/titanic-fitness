import "./ArticlesPage.css"
import {useParams} from "react-router"

export default function ArticlePage(){
    const {slug} = useParams();
    return(
        <div className="article-content">
        This is {slug} article
        </div>
    )
}