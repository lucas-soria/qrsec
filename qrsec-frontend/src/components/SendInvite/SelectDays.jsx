import { Card, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material';
import React, { Fragment } from 'react'


export function SelectDays( { days, setDays } ) {

    const matches = useMediaQuery("(min-width:600px)");

    const handleDays = (event, newDays) => {
        setDays(newDays);
    };

    return (
        <Fragment>
            <div className='custom-component'>
                <Typography variant='h6'>Días permitidos:</Typography>
                <Card elevation={6} id='card' className='card-days'>
                    <ToggleButtonGroup className='days-group' value={ days } onChange={ handleDays } orientation={`${matches ? `horizontal` : `vertical`}`} size="small">
                        <ToggleButton id="day" value="1">Lunes</ToggleButton>
                        <ToggleButton id="day" value="2">Martes</ToggleButton>
                        <ToggleButton id="day" value="3">Miercoles</ToggleButton>
                        <ToggleButton id="day" value="4">Jueves</ToggleButton>
                        <ToggleButton id="day" value="5">Viernes</ToggleButton>
                        <ToggleButton id="day" value="6">Sabado</ToggleButton>
                        <ToggleButton id="day" value="0">Domingo</ToggleButton>
                    </ToggleButtonGroup>
                </Card>
            </div>
        </Fragment>
    )
}
