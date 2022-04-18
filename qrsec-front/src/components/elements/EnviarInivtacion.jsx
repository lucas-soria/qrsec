import React, { Fragment, useRef, useState } from 'react'
import { Autocomplete, IconButton, ToggleButton, ToggleButtonGroup, TextField, Typography, Switch, useMediaQuery, Card, Button } from '@mui/material'
import { AddCircleOutlineOutlined, AddLink, ArrowDropDown } from '@mui/icons-material'


export function EnviarInvitacion() {

    const invitados = [
        {firstName:'Peter', lastName:'Parker', telefono:39823893},
        {firstName:'Bruce', lastName:'Banner', telefono:39823893},
        {firstName:'Miles', lastName:'Morales', telefono:39823893}
    ];

    const getList = (invitados) => {
        return [{label:'Agregar invitado'},...invitados.map( (invitado) => {
            return {label: invitado.firstName + ' ' + invitado.lastName}
        })]
    }

    const handleAdd = () => {
        console.log("Agregar una nueva linea")
        console.log(days)
    }

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [days, setDays] = useState();

    const handleDays = (event, newDays) => {
        setDays(newDays);
    };

    const matches = useMediaQuery("(min-width:600px)");

    const invitadoRef = useRef()

    const handleSelect = () => {
        if (invitadoRef.current.value === "Agregar invitado") {
            alert("Nuevo!!!!")
        } else {
            alert(invitadoRef.current.value)
        }
    }


    return (
        <Fragment>
            <div className='section'>
                <Typography variant='h6'>Invitado:</Typography>
                <Card elevation={6} id='card' className='autocomplete'>
                    <Autocomplete
                        popupIcon={<ArrowDropDown className='arrow-icon' />}
                        blurOnSelect
                        clearOnEscape
                        options={getList(invitados)}
                        onBlur={ handleSelect }
                        renderInput={(label) => <TextField variant='outlined' className="text-fields" {...label} label="Seleccionar invitado" inputRef={ invitadoRef } />}
                    />
                </Card>
            </div>

            <div className='section'>
                <Typography variant='h6'>Días permitidos:</Typography>
                    <Card elevation={6} id='card' className='card-days'>
                        <ToggleButtonGroup className='days-group' value={days} onChange={ handleDays } orientation={`${matches ? `horizontal` : `vertical`}`} size="small">
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

            <div className='section'>
                <Typography variant='h6'>Horario permitido:</Typography>
                <Card elevation={6} id='card'>
                    <TextField type='time' className="text-fields hour" />
                    <TextField type='time' className="text-fields hour" />
                    <IconButton onClick={ handleAdd }><AddCircleOutlineOutlined className='button-icon' fontSize='large'/></IconButton>
                </Card>
            </div>
            
            <div className='section'>
                <Typography variant='h6'>Tiempo máximo de estadía:</Typography>
                <Card elevation={6} id='card'>
                    <TextField variant='filled' type='number' label='Ej: 5hs' className="text-fields" />
                </Card>
            </div>

            <div className='section'>
                <Typography variant='h6'>Acompañantes:</Typography>
                <Card elevation={6} id='card'>
                    <TextField variant='filled' type='number' label='Ej: 3 acompañantes' className="text-fields" />
                </Card>
            </div>

            <div className='section'>
                <Typography variant='h6' style={{display:'inline-block'}}>¿Deja una o más personas?</Typography>
                <Switch {...label} />
            </div>

            <Card elevation={6} id='card' className='card-send'>
                <Button variant='contained' id='button-send' startIcon={<AddLink fontSize='large' />}>Generar link</Button>
            </Card>
        </Fragment>
  )
}

/*
    <TextField type='time' label='Desde' className="text-fields" />
    <TextField type='time' label='Hasta' className="text-fields" />
    <IconButton onClick={ handleAdd }><AddCircleOutlineOutlined /></IconButton>
    <IconButton onClick={ handleRemove }><RemoveCircleOutlineOutlined /></IconButton>
*/
