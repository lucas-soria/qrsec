import { Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { getInvite } from '../../data/Reducers'

export function InviteInfo( { id, state } ) {

    const [invite, setInvite] = useState()

    useEffect(() => {
	
		(async () => {
		  	setInvite(await getInvite(id))
            console.log(invite)
		})();
	
	}, [state]);

    return (
        <>
        {!!invite ? (
            <>
            <Card elevation={6} id='valid'>
                <Typography variant='h5' >Info invitado:</Typography>
                <Typography variant='body1' >Nombre: {invite.guest.firstName}</Typography>
                <Typography variant='body1' >Apellido: {invite.guest.lastName}</Typography>
                <Typography variant='body1' >DNI: {invite.guest.dni}</Typography>
                <br />
                <Typography variant='h5' >Info residente:</Typography>
                <Typography variant='body1' >Nombre: {invite.owner.firstName}</Typography>
                <Typography variant='body1' >Apellido: {invite.owner.lastName}</Typography>
                <Typography variant='body1' >Telefono: {invite.owner.phone}</Typography>
                <Typography variant='body1' >Casa: manzana {invite.owner.address.house.block}, casa {invite.owner.address.house.house}</Typography>
            </Card>
            </>
        ):
            <>
            <Card id='invalid'>
                <Typography>Invitación invalida</Typography>
            </Card>
            </>}
        </>
    )
}
