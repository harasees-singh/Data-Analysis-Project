import "./CSS/Prediction.css"
import * as React from 'react';
import prediction_img from "../assets/images/final_down.jpg"
import Form from './Form.js'
import Button from '@material-ui/core/Button';
/////////////////////////////////////////////////////
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
/////////////////////////////////////////////////////
import fueltypes from '../assets/Inferences/FuelTypes'
import enginetypes from '../assets/Inferences/EngineTypes'
import fuelsystemtypes from '../assets/Inferences/FuelSystemTypes'
import aspirationtypes from '../assets/Inferences/AspirationType'
import doornumbertypes from '../assets/Inferences/DoornumberTypes'
import carbodytypes from '../assets/Inferences/CarbodyTypes'
import drivewheeltypes from "../assets/Inferences/DrivewheelTypes";
import cylindertypes from "../assets/Inferences/CylinderType";
///////////////////////////////////////////////////////
import LinearRegression from "./LinearRegression";

function Prediction() {

    /////////////////////////////////////////

    const [values, setValues] = React.useState({
        curbweight: 2000,
        enginesize: 200,
        horsepower: 80,
        peakrpm: 5000,
        citymileage: 20,
        highwaymileage: 30,
        price: 25000,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    /////////////////////////////////////////

    const [fuel, setFuel] = React.useState('gas');
    const handleFuel = (event) => {
        setFuel(event.target.value);
    };

    const [engine, setEngine] = React.useState('ohc');
    const handleEngine = (event) => {
        setEngine(event.target.value)
    }

    const [fuelsystem, setFuelSystem] = React.useState('mfi');
    const handleFuelSystem = (event) => {
        setFuelSystem(event.target.value)
    }

    const [aspiration, setAspirationSystem] = React.useState('std');
    const handleAspirationSystem = (event) => {
        setAspirationSystem(event.target.value)
    }

    const [doornumber, setDoornumber] = React.useState(2);
    const handleDoornumber = (event) => {
        setDoornumber(event.target.value)
    }

    const [carbody, setCarbody] = React.useState('sedan');
    const handleCarbody = (event) => {
        setCarbody(event.target.value)
    }

    const [drivewheel, setDrivewheel] = React.useState('rwd');
    const handleDrivewheel = (event) => {
        setDrivewheel(event.target.value)
    }

    const [cylindernumber, setCylinder] = React.useState(4);
    const handleCylinder = (event) => {
        setCylinder(event.target.value)
    }

    const [sales, setSales] = React.useState(0);

    const handleSales = (event) => {
        setSales(event);
    };

    ///////////////////////////////
    const parameters = [cylindernumber, drivewheel, ]
    ///////////////////////////////

    const width_ = '25vw';
    return (
        <div className='prediction_box'>
            <div className="prediction_heading">
                <img className="prediction_img" src={prediction_img} alt="img" />
                <div className="predictSales">
                    PREDICT SALES
                    <div className="predictSales_text">
                        Input the car specifications and we will predict it's annual sales for you ! Just fill in the car specifications and click on 'PREDICT SALES'

                    </div>


                </div>
            </div>
            <div className='prediction_text'>
                <div className="dropdown">
                    <Form option={fuel} handleChange={handleFuel} menuops={fueltypes} name={"fuel"} />
                    <Form option={engine} handleChange={handleEngine} menuops={enginetypes} name={"engine"} />
                    <Form option={fuelsystem} handleChange={handleFuelSystem} menuops={fuelsystemtypes} name={"fuelsystem"} />
                    <Form option={aspiration} handleChange={handleAspirationSystem} menuops={aspirationtypes} name={"aspiration"} />
                    <Form option={doornumber} handleChange={handleDoornumber} menuops={doornumbertypes} name={"doornumber"} />
                    <Form option={carbody} handleChange={handleCarbody} menuops={carbodytypes} name={"carbody"} />
                    <Form option={drivewheel} handleChange={handleDrivewheel} menuops={drivewheeltypes} name={"drivewheel"} />
                    <Form option={cylindernumber} handleChange={handleCylinder} menuops={cylindertypes} name={"cylinder count"} />

                    <div className='buttons-dataset'>
                        <Button variant="contained" color="primary"  onClick={() => {
                            setSales(LinearRegression([doornumber, values.curbweight, cylindernumber, values.enginesize, values.horsepower, values.peakrpm, values.citymileage, values.highwaymileage, values.price, fuel, aspiration, carbody, drivewheel, engine, fuelsystem]))
                        }}>
                            Predict
                        </Button>
                    </div>
                </div>
                <div className="prediction_input_fields">
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.curbweight}
                                    onChange={handleChange('curbweight')}
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter curbweight</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.enginesize}
                                    onChange={handleChange('enginesize')}
                                    endAdornment={<InputAdornment position="end">lt</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter enginesize</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.horsepower}
                                    onChange={handleChange('horsepower')}
                                    endAdornment={<InputAdornment position="end">hp</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter horsepower</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.peakrpm}
                                    onChange={handleChange('peakrpm')}
                                    endAdornment={<InputAdornment position="end">rpm</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter peakrpm</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.citymileage}
                                    onChange={handleChange('citymileage')}
                                    endAdornment={<InputAdornment position="end">km / lt</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter citymileage</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.highwaymileage}
                                    onChange={handleChange('highwaymileage')}
                                    endAdornment={<InputAdornment position="end">km / lt</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter highwaymileage</FormHelperText>
                            </FormControl>
                        </div>


                        <div className="prediction_Input_container">
                            <FormControl sx={{ m: 1, width: { width_ } }} variant="outlined">
                                <OutlinedInput
                                    value={values.price}
                                    onChange={handleChange('price')}
                                    endAdornment={<InputAdornment position="end">USD</InputAdornment>}
                                    className='inputfield'
                                />
                                <FormHelperText>Please enter price</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="Sales">
                            <TextField
                                id="outlined"
                                label="Predicted Sales"
                                value={sales}
                                className='Sales_box'
                            />
                        </div>
                    </Box>
                </div>
            </div >
        </div >
    )
}
export default Prediction