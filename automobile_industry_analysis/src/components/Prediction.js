import "./Prediction.css"
import prediction_img from "../assets/images/final_down.jpg"
function Prediction(){
    return(
        <div className='prediction_box'>
            <img className="prediction_img" src={prediction_img} alt="img" />
        </div>
    )
}
export default Prediction