import { Login } from '@mui/icons-material'
import { Button, Card, TextField, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { logIn } from '../data/Reducers'
import { frontUrls } from '../data/Urls'

export function SignIn() {

    const navigate = useNavigate()

    const location = useLocation()

    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSignIn = () => {
        logIn(email, password).then((response) => {
            localStorage.setItem("access_token", response.access_token)
            localStorage.setItem("refresh_token", response.refresh_token)
        })
        if (location.state !== null) {
            navigate(location.state.from.pathname)
        } else {
            navigate(frontUrls.base + frontUrls.create)
        }
    }

    useEffect(() => {
        document.title = "QRSec - Iniciar sesión"
      }, [])

    return (
        <Fragment>
            <div className='custom-component'>
                <Typography variant='h6'>Email:</Typography>
                <Card elevation={6} id='card'>
                    <TextField variant='filled' type='text' label='Ej: lucas@qrsec.com' className="text-fields" onChange={ handleEmail } />
                </Card>
                <Typography variant='h6'>Contraseña:</Typography>
                <Card elevation={6} id='card'>
                    <TextField variant='filled' type='password' label='**********' className="text-fields" onChange={ handlePassword } />
                </Card>
                <Card elevation={6} id='card' className='card-send'>
                    <Button variant='contained' id='button-send' startIcon={ <Login fontSize='large' /> } onClick={ handleSignIn } >Iniciar sesión</Button>
                </Card>
            </div>
        </Fragment>
    )
}
