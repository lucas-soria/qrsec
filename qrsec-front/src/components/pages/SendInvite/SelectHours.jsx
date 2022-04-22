import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { Card, IconButton, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import { Hours } from './Hours';


export function SelectHours( { hours, setHours } ) {

    const handleAdd = () => {
        setHours([...hours, []])
    }

    const handleRemove = (key) => {
        hours.pop()
        setHours([...hours])
    }

    return (
        <Fragment>
            <div className='custom-component'>
                <Typography variant='h6'>Horario permitido:</Typography>
                <Card elevation={6} id='card' className='card-hour'>
                    <Hours hours={ hours } />
                    <IconButton onClick={ handleAdd } ><AddCircleOutlineOutlined className='button-icon' fontSize='medium'/></IconButton>
                    { (hours.length > 1) ? <IconButton onClick={ handleRemove }><RemoveCircleOutlineOutlined className='button-icon' fontSize='medium' /></IconButton> : <></> }
                </Card>
            </div>
        </Fragment>
    )
}
