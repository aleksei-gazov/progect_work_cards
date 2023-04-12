import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import { Visibility, VisibilityOff } from '@mui/icons-material'

type UserSubmitForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
      });
    
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = (data) => {
        console.log(JSON.stringify(data));
      };


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form  onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>
                    <h3>Sing Up</h3>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...register('email')}
                        />
                        <TextField type="password" label="password"
                                   margin="normal"
                                   {...register('password')}
                        />
                        <TextField type="password" label="confirm password"
                                   margin="normal"
                                   {...register('confirmPassword')}                        
                        />
                             {/* <InputAdornment position="end">
                                   <IconButton
                                     aria-label="toggle password visibility"
                                    //  onClick={handleClickShowPassword}
                                     color={errors.password?.message ? 'error' : 'default'}
                                     // onMouseDown={handleMouseDownPassword}
                                   >
                                     {true ? <VisibilityOff /> : <Visibility />}
                                   </IconButton>
                                 </InputAdornment> */}
                          
                        <Button type={'submit'} variant={'contained'} color={'primary'}
                           style={{
                            borderRadius: "30px",
                            marginTop: "40px",
                            width: "100%",
                            padding: "10px 0",
                            fontSize:"16px",
                            fontWeight:"500"
                        }}
                        >
                            Sing Up
                        </Button>
                    </FormGroup>
                    <Typography
              fontSize={'14px'}
              fontWeight={'500'}
              color={'#0000008a'}
              variant={'caption'}
              margin={'30px 0 10px'}
            >
              Already have an account?
            </Typography>
                    {/* <FormLabel>
                    <p>Already have an account?</p>
                    </FormLabel> */}
                </FormControl>
            </form>
            <NavLink to={'/login'} style={{ fontSize: '16px', fontWeight: '600' }}>
              Sign In
            </NavLink>
        </Grid>
    </Grid>
}



