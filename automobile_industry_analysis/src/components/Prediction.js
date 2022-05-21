import "./Prediction.css"
import * as React from 'react';
import prediction_img from "../assets/images/final_down.jpg"
import Form from './Form.js'
import fueltypes from '../assets/Inferences/FuelTypes'
import enginetypes from '../assets/Inferences/EngineTypes'

function Prediction() {

    const [fuel, setFuel] = React.useState('None');
    const handleFuel = (event) => {
        setFuel(event.target.value);
    };

    const [engine, setEngine] = React.useState('None');
    const handleEngine = (event) => {
        setEngine(event.target.value)
    }
    return (
        <div className='prediction_box'>
            <img className="prediction_img" src={prediction_img} alt="img" />
            <div className='prediction_text'>
                PREDICT SALES
                <Form option={fuel} handleChange={handleFuel} menuops={fueltypes} name={"fuel"}/>
                <Form option={engine} handleChange={handleEngine} menuops={enginetypes} name={"engine"} />
            
            </div >
        </div >
    )
}
export default Prediction