import { Container } from '@mui/material'
import React, { Fragment } from 'react'
import { ResponsiveAppBar } from './components/ResponsiveAppBar'
import { SendInvite } from './pages/SendInvite'
import { ShowInvite } from './pages/ShowInvite'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { frontUrls } from './data/Urls'

export function App() {

    return (
        <Fragment>
            <ResponsiveAppBar />
            <Container maxWidth='sm'>
                <BrowserRouter>
                    <Routes>                        
                        <Route path={ frontUrls.create } element={ <SendInvite /> } />
                        <Route path={ frontUrls.view + ":id" } element={ <ShowInvite /> } />
                        <Route path={ frontUrls.base } element={<Navigate replace to={ frontUrls.create } />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </Fragment>
    )
}

/*
            <TextField type="time" label="Hora"></TextField>
            <Grid container spacing={2} justifyItems="center" style={{margin:'10px'}}>
                <Grid item xs={3} sm={6}><Paper elevation={6} style={{height:'75px', width:'100%'}} /></Grid>
                <Grid item xs={3} sm={6}><Paper style={{height:'75px', width:'100%'}} /></Grid>
            </Grid>
*/
/*<Route exact path="/" element={loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} />*/
