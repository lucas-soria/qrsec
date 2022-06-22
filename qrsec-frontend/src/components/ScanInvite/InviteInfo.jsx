import { Card, Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { getInvite } from '../../data/Reducers'
import { v4 as uuidv4 } from 'uuid'

export function InviteInfo( { id, state } ) {

    const [invite, setInvite] = useState()

    useEffect(() => {
	
		(async () => {
		  	setInvite(await getInvite(id))
		})();
	
	}, [state]);

    const validate = (invite) => {
        let now = new Date()
        if (invite.days.includes(now.getDay().toString())) {
            let hoursValidation = invite.hours.map( (hour) => {
                let start = new Date()
                start.setHours(hour[0].split(":")[0])
                start.setMinutes(hour[0].split(":")[1])
                let end = new Date()
                end.setHours(hour[1].split(":")[0])
                end.setMinutes(hour[1].split(":")[1])
                if (start > now || now > end) {
                    return false
                } else {
                    return true
                }
            } )
            if (hoursValidation.includes(true)) {
                return true
            }
        }
        return false
    }

    return (
        <>
        {!!invite && validate(invite) ? (
            <>
            <Card elevation={6} id='valid'>
                <Typography variant='h5' >Información de los invitados:</Typography>
                {invite.maxTime ? <Typography variant='body1' >Tiempo máximo de estadía: { invite.maxTime }</Typography> : <></>}
                {invite.guests.map( (guest) => 
                    <Fragment key={ uuidv4() }>
                        <Typography variant='body1' >Nombre: {guest.firstName}</Typography>
                        <Typography variant='body1' >Apellido: {guest.lastName}</Typography>
                        <Typography variant='body1' >DNI: {guest.dni}</Typography>
                        <br />
                    </Fragment>
                )}
                <Typography variant='h5' >Información del residente:</Typography>
                <Typography variant='body1' >Nombre: {invite.owner.firstName}</Typography>
                <Typography variant='body1' >Apellido: {invite.owner.lastName}</Typography>
                <Typography variant='body1' >Teléfono: {invite.owner.phone}</Typography>
                <Typography variant='body1' >Casa: {invite.owner.address.house.block} {invite.owner.address.house.house}</Typography>
            </Card>
            </>
        ):
            <>
            <Card id='invalid'>
                <Typography>Invitación invalida</Typography>
            </Card>
            </>
        }
        </>
    )
}
