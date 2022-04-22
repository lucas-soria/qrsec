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
                        <ToggleButton id="day" value="Lunes">Lunes</ToggleButton>
                        <ToggleButton id="day" value="Martes">Martes</ToggleButton>
                        <ToggleButton id="day" value="Miercoles">Miercoles</ToggleButton>
                        <ToggleButton id="day" value="Jueves">Jueves</ToggleButton>
                        <ToggleButton id="day" value="Viernes">Viernes</ToggleButton>
                        <ToggleButton id="day" value="Sabado">Sabado</ToggleButton>
                        <ToggleButton id="day" value="Domingo">Domingo</ToggleButton>
                    </ToggleButtonGroup>
                </Card>
            </div>
        </Fragment>
    )
}
