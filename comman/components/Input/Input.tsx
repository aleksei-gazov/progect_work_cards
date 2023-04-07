import * as React from 'react';
import './Input.scss';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type InputPropsType = {
status: string
}

export const Input: React.FC<InputPropsType> =({status}) => {
const [value, setValue] =React.useState('')

const onChangeHandler = (e) => {
  setValue(e.currentTarget.value)
}
React.useEffect(()=> {
  setValue(status)
}, [status])

  return (
<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={value} onChange={onChangeHandler} id="standard-basic" label="Standard" variant="standard" />
    </Box>
 
  );
}
