import { ArrowDropDown } from '@mui/icons-material';
import { Autocomplete, Card, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react'


export function SelectGuest( { guest, setGuest } ) {

    const agregar = "Agregar invitado"

    const guests = [
        {firstName:'Peter', lastName:'Parker', telefono:39823893},
        {firstName:'Bruce', lastName:'Banner', telefono:39823893},
        {firstName:'Miles', lastName:'Morales', telefono:39823893}
    ];

    const getList = (guests) => [{name: agregar}, ...guests.map( guest => ({name: guest.firstName + " " + guest.lastName}))]

    const handleSelect = (event, guest=undefined) => {
        if (typeof(guest) != "undefined") {
            if (guest === agregar) {
                console.log("Pop new invitado")
            } else {
                setGuest(guest)
            }
        }
    }

    return (
        <Fragment>
            <div className='custom-component'>
                <Typography variant='h6'>Invitado:</Typography>
                <Card elevation={6} id='card' className='autocomplete'>
                    <Autocomplete
                        popupIcon={<ArrowDropDown className='arrow-icon' />}
                        blurOnSelect
                        clearOnEscape
                        options={ getList(guests) }
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        getOptionLabel={ (option) => option.name }
                        onChange={ handleSelect }
                        renderInput={(guest) => <TextField variant='outlined' className="text-fields" {...guest} label="Seleccionar invitado" />}
                    />
                </Card>
            </div>
        </Fragment>
    )
}
