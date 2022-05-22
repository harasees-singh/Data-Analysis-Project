import "./CSS/Prediction.css"
import * as React from 'react';
import prediction_img from "../assets/images/final_down.jpg"
import Form from './Form.js'
import fueltypes from '../assets/Inferences/FuelTypes'
import enginetypes from '../assets/Inferences/EngineTypes'
import fuelsystemtypes from '../assets/Inferences/FuelSystemTypes'

function Prediction() {


    console.log(fuelsystemtypes)

    const [fuel, setFuel] = React.useState('None');
    const handleFuel = (event) => {
        setFuel(event.target.value);
    };

    const [engine, setEngine] = React.useState('None');
    const handleEngine = (event) => {
        setEngine(event.target.value)
    }

    const [fuelsystem, setFuelSystem] = React.useState('None');
    const handleFuelSystem = (event) => {
        setFuelSystem(event.target.value)
    }
    return (
        <div className='prediction_box'>
            <img className="prediction_img" src={prediction_img} alt="img" />
            <div className='prediction_text'>
                <p className="predictSales">PREDICT SALES</p>
                <div>
                    <Form option={fuel} handleChange={handleFuel} menuops={fueltypes} name={"fuel"} />
                    <Form option={engine} handleChange={handleEngine} menuops={enginetypes} name={"engine"} />
                    <Form option={fuelsystem} handleChange={handleFuelSystem} menuops={fuelsystemtypes} name={"fuelsystem"} />
                </div>
            </div >
        </div >
    )
}
export default Prediction