import React, { Fragment, useState } from 'react'
import { Card, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, useTheme, useMediaQuery, Snackbar } from '@mui/material'
import { AddLink, ContentCopy } from '@mui/icons-material'
import { SelectGuest } from './SendInvite/SelectGuest'
import { SelectDays } from './SendInvite/SelectDays'
import { SelectHours } from './SendInvite/SelectHours'
import { SelectMaxTime } from './SendInvite/SelectMaxTime'
import { SelectPassengers } from './SendInvite/SelectPassengers'
import { SwitchDrop } from './SendInvite/SwitchDrop'
import { createInvite } from '../../Reducers'

export function EnviarInvitacion() {

    const base_url = "http://localhost:3000/invite/"

    const owner = "626b5a262202bfa3692aa17c"

    var invite = {}

    const [guest, setGuest] = useState()
    
    const [days, setDays] = useState([])

    const [hours, setHours] = useState([ [] ])

    const [maxTime, setMaxTime] = useState()

    const [passengers, setPassengers] = useState(0)

    const [drop, setDrop] = useState(false)

    const [url, setUrl] = useState("")

    const [open, setOpen] = useState(false);

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = async () => {
        invite['owner'] = {"id": owner}
        invite['guest'] = guest
        invite['days'] = days
        invite['hours'] = hours.filter( (hour) => hour.length > 0 )
        invite['maxTime'] = maxTime
        invite['passengers'] = passengers
        invite['drop'] = drop
        var algo = await createInvite(invite)
        setUrl(base_url + algo.id)
        handleClickOpen()
    }

    const [openSnack, setOpenSnack] = useState(false)

    const handleCopy = () => {
        setOpenSnack(true)
        navigator.clipboard.writeText(url)
    }

    return (
        <Fragment>
            <SelectGuest guest={ guest } setGuest={ setGuest } />
            <SelectDays days={ days } setDays={ setDays } />
            <SelectHours hours={ hours } setHours={ setHours } />
            <SelectMaxTime setMaxTime={ setMaxTime } />
            <SelectPassengers setPassengers={ setPassengers } />
            <SwitchDrop setDrop={ setDrop } />
            <Card elevation={6} id='card' className='card-send'>
                <Button variant='contained' id='button-send' startIcon={ <AddLink fontSize='large' /> } onClick={ handleCreate } >Generar link</Button>
            </Card>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Copiá y compartí la invitación!:"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {url} <Button variant='contained' startIcon={ <ContentCopy fontSize='largge' /> } onClick={ handleCopy } >Copiar</Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Hecho
                    </Button>
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
