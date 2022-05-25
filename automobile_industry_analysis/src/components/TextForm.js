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
                    value={props.value}
                    onChange={props.handleChange(props.name)}
                    endAdornment={<InputAdornment position="end">{props.unit}</InputAdornment>}
                    className='inputfield'
                    error={props.error}
                />
                <FormHelperText>Please enter {props.name}</FormHelperText>
            </FormControl>
        </div>
    )
}
export default TextForm