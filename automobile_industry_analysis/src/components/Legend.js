import './CSS/Legend.css'
import Row from './Row'
import EngineTypes from '../assets/Inferences/EngineTypes';
import FuelSystemTypes from '../assets/Inferences/FuelSystemTypes';
import DrivewheelTypes from '../assets/Inferences/DrivewheelTypes';
function Legend() {
    let x= 0
    return (
        <div className="legend">
            <div className='legend_container'>
                <p className='title'>Drivewheel Types</p>
                {DrivewheelTypes.map((pair) => (

                    <Row key={x++} label={pair.label} value={pair.value} />
                    
                ))}
            </div>
            <div className='legend_container'>
                <p className='title'>Engine Types</p>
                {EngineTypes.map((pair) => (

                    <Row key={x++} label={pair.label} value={pair.value} />

                ))}
            </div>
            <div className='legend_container'>
                <p className='title'>Fuel System Types</p>
                {FuelSystemTypes.map((pair) => (

                    <Row key={x++} label={pair.label} value={pair.value} />

                ))}
            </div>
        </div>
    )
}
export default Legend;