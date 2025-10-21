import "./SiteFeatures.css"

function FeatureThumbnail({title,description,dest}){
    return(
        <div className="feature-thumb">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={dest}>Read More</a>
        </div>
    )
}

export default function SiteFeatures(){

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