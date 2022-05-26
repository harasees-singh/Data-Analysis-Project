import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './CSS/Form.css'
function Form({ ...props }) {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25vw' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-select-option"
                    select
                    label="Select"
                    value={props.option}
                    onChange={props.handleChange}
                    helperText={"Please select " + props.name}
                    className='inputfield'
                    
                >
                    {/* iterating over the menu options and rendering them in the dropdown menu */}
                    {props.menuops.map((option) => (
                        <MenuItem key={option.value} value={option.label}>
                            <p key={option.value} className='leftalign'>{option.label}</p>
                            {/* rendering the short form for the feature name like 'ohc' for Overhead Camshaft */}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
        </div>
    )
}
export default Form;