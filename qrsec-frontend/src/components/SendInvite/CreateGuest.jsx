import { PersonAdd } from '@mui/icons-material';
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { createGuest } from '../../data/Reducers';

export function CreateGuest( { open, setOpen } ) {

	const handleClose = () => {
        setOpen(false);
    };

	const handleClick = () => {
		let guest = {
			firstName: firstName,
			lastName: lastName,
			dni: dni,
			phone: phone
		}
		createGuest(guest)
		handleClose()
	}

    const [openSnack, setOpenSnack] = useState(false)

	const [phone, setPhone] = useState()

	const handlePhone = (event) => {
        setPhone(event.target.value);
    };

	const [firstName, setFirstName] = useState()

	const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

	const [lastName, setLastName] = useState()

	const handleLastName = (event) => {
        setLastName(event.target.value);
    };
	
	const [dni, setDni] = useState()

	const handleDni = (event) => {
        setDni(event.target.value);
    };

    return (
        <Fragment>
            <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
            >
            <DialogTitle id="responsive-dialog-title">
                Ingresa los datos del nuevo invitado:
            </DialogTitle>
            <DialogContent>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={6}>
                        <DialogContentText>Nombre:</DialogContentText>
                        <Card elevation={6} id='card'>
                            <TextField variant='filled' type='text' label='Ej: Lucas Damián' className="text-fields" onChange={handleFirstName} />
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                      <DialogContentText>Apellido:</DialogContentText>
                        <Card elevation={6} id='card'>
                            <TextField variant='filled' type='text' label='Ej: Soria Gava' className="text-fields" onChange={handleLastName} />
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                      <DialogContentText>DNI:</DialogContentText>
                        <Card elevation={6} id='card'>
                            <TextField variant='filled' type='number' label='Ej: 42670490' className="text-fields" onChange={handleDni} />
                        </Card>
                      </Grid>
                      <Grid item xs={6}>
                      <DialogContentText>Teléfono:</DialogContentText>
                        <Card elevation={6} id='card'>
							<TextField variant='filled' type='text' label='Ej: +542613893772' className="text-fields" onChange={handlePhone} />
                        </Card>
                      </Grid>
                    </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' startIcon={ <PersonAdd fontSize='large' /> } onClick={ handleClick }>Crear</Button>
            </DialogActions>
            </Dialog>
            <Snackbar
            open={openSnack}
            onClose={() => setOpenSnack(false)}
            autoHideDuration={2000}
            message="Copiado al portapapeles!"
            />
        </Fragment>
  )
}
/*

*/