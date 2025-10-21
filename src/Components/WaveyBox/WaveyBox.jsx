import "./WaveyBox.css"

export default function WaveyBox({image,text}){
    return(
        <div className="wave-container">
            <img src={image}/>
            <h1>{text}</h1>
        </div>
    )
}