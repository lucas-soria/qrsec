import { ArrowDropDown } from '@mui/icons-material';
import { Autocomplete, Card, TextField, Typography } from '@mui/material';
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { getMyGuests } from '../../data/Reducers';
import { CreateGuest } from './CreateGuest';


export function SelectGuest( { guest, setGuest } ) {

    const agregar = "Agregar invitado"

    const [open, setOpen] = useState(false);

	  const [openGuest, setOpenGuest] = useState(false);

    const [options, setOptions] = useState([]);

    const loading = open && options.length === 0;
  
    useEffect(() => {
  
      if (!loading) {
        return undefined;
      }
  
      (async () => {
        const guests = await getMyGuests();
        setOptions([{name: agregar}, ...guests.map( guest => ({...guest, name: guest.firstName + " " + guest.lastName}))]);
      })();
  
    }, [loading]);
  
    useEffect(() => {
      if (!open) {
        setOptions([]);
      }
    }, [open]);


    const handleSelect = (event, guest=undefined) => {
        if (typeof(guest) != "undefined") {
            if (guest.name === agregar) {
                setOpenGuest(true)
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
                        open={open}
                        onOpen={() => {
                          setOpen(true);
                        }}
                        onClose={() => {
                          setOpen(false);
                        }}
                        clearOnEscape
                        options={options}
                        loading={loading}
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        getOptionLabel={ (option) => option.name }
                        onChange={ handleSelect }
                        renderInput={(guest) => <TextField variant='outlined' className="text-fields" {...guest} label="Seleccionar invitado" />}
                    />
                </Card>
            </div>
		      	<CreateGuest open={ openGuest } setOpen={ setOpenGuest } />
        </Fragment>
    )
}
