import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({ name, value, possibleValues, onChange }) {

    console.log(name)
    console.log(value)
    console.log(possibleValues)

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120, color: "white" }}>
                <InputLabel>{name}</InputLabel>
                <Select
                    value={value}
                    label={name}
                    onChange={(event) => onChange(event.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        possibleValues.map((value, index) => {
                            return <MenuItem key={index} value={value}>{value}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}
