import { createTheme, ThemeProvider } from '@mui/material/styles'
import React, { useRef, useState } from 'react'
import './registration.css'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

import { useDispatch } from 'react-redux'
import { setAllState } from '../../redux/features/Middleware/middlewareSlice'
const theme = createTheme()

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

// function componentDismount(_param) {
//     document.title = `test: ${_param}`
// }

export function Registration() {
    const formRegis = {
        username: "admin01",
        name: "admin01",
        password: "asdqwe123",
        email: "admin01@gmail.com",
    }
    const checkConfirm = useRef()
    const [formRegister, setFormRegister] = useState(formRegis)
    async function handleRegister(){
        if(!checkConfirm.current.checked){
            Toast.fire({
                icon: 'warning',
                title: 'please allow!'
            })
            return false
        }
        const url = `http://localhost:3000/api/admin/register`
        try {
            const response = await axios({
                method: 'POST',
                url: url,
                data: formRegister
            });
            if(response.data.status){
                Swal.fire({
                    icon: 'success',
                    title: 'user was created.',
                    showConfirmButton: false,
                    timer: 1000
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'please try again.',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        } catch(error){
            Swal.fire({
                icon: 'error',
                title: 'user cannot create.',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }
    return (
        <div className="register-content">
            <div className="oval-top"></div>
            <div className="oval-middle"></div>
            <div className="oval-middle-mirror"></div>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{marginTop: 'auto', marginBottom: 'auto'}}>
                    <CssBaseline />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#ffffffcf',
                        padding: '2rem',
                        borderRadius: '1rem'
                    }}>
                        <Typography component="h1" variant="h5">Sign up</Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="username"
                                    name="username"
                                    value={formRegister.username}
                                    onChange={e => setFormRegister({ ...formRegister, username: e.target.value})}
                                    autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="name"
                                    name="name"
                                    value={formRegister.name}
                                    onChange={e => setFormRegister({ ...formRegister, name: e.target.value})}
                                    autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={formRegister.email}
                                    onChange={e => setFormRegister({ ...formRegister, email: e.target.value})}
                                    autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formRegister.password}
                                    onChange={e => setFormRegister({ ...formRegister, password: e.target.value})}
                                    autoComplete="new-password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <label>
                                    <input type="checkbox" ref={checkConfirm}/> Browser default
                                    </label>
                                </Grid>
                            </Grid>
                            <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleRegister}
                            >
                            Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                            <Grid item>
                                <span>Already have an account? </span>
                                <Link to="/login" variant="body2" className='text-blue-600'>Sign in</Link>
                            </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export function Login(){
    const dispatch = useDispatch()
    const login = {
        username: "admin01",
        password: "asdqwe123"
    }
    const [formLogin, setFormLogin] = useState(login)
    async function handleSignin(){
        const url = `http://localhost:3000/api/admin/signin`
        try {
            const response = await axios({
                method: 'post',
                url: url,
                data: formLogin
            })
            const setMiddleware = {
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token,
                statusLogin: false
            }
            if(response.data.status){
                setMiddleware.statusLogin = true
                await Toast.fire({
                    icon: 'success',
                    title: 'login success.',
                    showConfirmButton: false,
                    timer: 1000
                })
                dispatch(setAllState(setMiddleware))
            } else {
                await Toast.fire({
                    icon: 'error',
                    title: 'please try again.',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        } catch(error){
            Toast.fire({
                icon: 'error',
                title: 'cannot login.',
                showConfirmButton: false,
                timer: 1000
            })
        }
    }
    return (
        <div className="login-content">
            <div className="oval-top"></div>
            <div className="oval-middle"></div>
            <div className="oval-middle-mirror"></div>
            <div className="snowflakes" aria-hidden="true">
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
                <div className="snowflake">
                ❅
                </div>
                <div className="snowflake">
                ❆
                </div>
                <div className="snowflake">
                ❄
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{marginTop: 'auto', marginBottom: 'auto', zIndex: 10}}>
                    <CssBaseline />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#ffffffcf',
                        padding: '2rem',
                        borderRadius: '1rem'
                    }}>
                        <Typography component="h1" variant="h5">Sign in</Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="email"
                                    value={formLogin.username}
                                    onChange={(e) => setFormLogin({...formLogin, username: e.target.value})}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={formLogin.password}
                                    onChange={(e) => setFormLogin({...formLogin, password: e.target.value})}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSignin}
                            >
                            Sign in
                            </Button>
                            <Grid container justifyContent="flex-end">
                            <Grid item>
                                <span>Dont't have account? </span>
                                <Link to="/register" variant="body2" className="text-blue-600">Sign up</Link>
                            </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}