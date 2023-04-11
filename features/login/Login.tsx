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

type UserSubmitForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Login = () => {
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
    
      const onSubmit = (data: UserSubmitForm) => {
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
                        <Button type={'submit'} variant={'contained'} color={'primary'}
                        //    style={{
                        //     borderRadius: "30px",
                        //     marginTop: "40px",
                        //     width: "100%",
                        //     padding: "17px 0",
                        //     fontSize:"16px",
                        //     fontWeight:"500"
                        // }}
                        >
                            Sing Up
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}



