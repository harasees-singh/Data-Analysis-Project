import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
function TextForm(props) {
    return (
        <div className="prediction_Input_container">
            <FormControl sx={{ m: 1, width: '19vw' }} variant="outlined">
                <OutlinedInput
                    value={props.value} // place the value from the props
                    onChange={props.handleChange(props.name)} // handle change function is common for all the inputfields just pass in the
                    // valid feature name
                    endAdornment={<InputAdornment position="end">{props.unit}</InputAdornment>} // units of measurement
                    className='inputfield'
                    error={props.error} // if props.error is true red-outlining will be triggered
                />
                <FormHelperText>Please enter {props.name}</FormHelperText>
            </FormControl>
        </div>
    )
}
export default TextForm