import { Container } from '@mui/material'
import React, { Fragment } from 'react'
import { ResponsiveAppBar } from './components/ResponsiveAppBar'
import { EnviarInvitacion } from './components/elements/EnviarInivtacion'

export function App() {

    return (
        <Fragment>
            <ResponsiveAppBar />
            <Container maxWidth='sm'>
                <EnviarInvitacion />
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
