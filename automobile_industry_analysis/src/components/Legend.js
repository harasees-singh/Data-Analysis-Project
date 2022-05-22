import background from "../assets/images/background.jpg"
import './CSS/Legend.css'
function Legend(){
    return(
        <div className="legend">
            <img className="back-img" src={background} />
        </div>
    )
}
export default Legend;