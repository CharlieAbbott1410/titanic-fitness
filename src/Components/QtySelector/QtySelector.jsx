import "./QtySelector.css"

export default function QtySelector({num, setNum, unit,step}){

    function increase(){
        setNum(num + step)
    }
    function decrease(){
        setNum( Math.max(num - step, 0))
    }

    return(
        <div className="qty-selector">
            {/* stuff will go here */}
            <button type="button" onClick={decrease} className="primary-btn">-</button>
            <input value={`${num} ${unit}`} required/>
            <button type="button" onClick={increase} className="primary-btn">+</button>
        </div>
    )
}