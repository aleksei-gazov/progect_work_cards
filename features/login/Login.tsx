import React, {useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {featchTodolistsTC, TodolistDomainType} from '../../features/TodolistsList/todolists-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {setAppStatusAC} from '../app-reducer';
import {loginTC} from './auth-reducer';
import {AppRootState} from '../../api/store';
import {Navigate} from 'react-router-dom';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch<any>()
    const formik = useFormik({
            validate: (values) => {
                const errors: FormikErrorType = {}
                if (!values.email) {
                    errors.email = 'Required'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address'
                }
                if (values.password.length < 3) {
                    errors.password = 'password must be more than 3 characters'
                }
                return errors
            },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
                dispatch(loginTC(values.email, values.password, values.rememberMe))
            // alert(JSON.stringify(values, null, 2));

            formik.resetForm()
        },
    });
    useEffect(() => {

            dispatch(setAppStatusAC('succeeded'))

    }, [dispatch])
    if(isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    console.log('2')
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <TextField type="password" label="password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox
                                {...formik.getFieldProps('rememberMe')}
                                checked={formik.values.rememberMe}
                            />}

                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}
