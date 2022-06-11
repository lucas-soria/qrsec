import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Map } from '../components/ShowInvite/Map'
import { QRCodeComponent } from '../components/ShowInvite/QRCode'
import { getInvite } from '../data/Reducers'

export function ShowInvite() {

    const { id } = useParams()

	const [invite, setInvite] = useState()

	useEffect(() => {
	
		(async () => {
		  	setInvite(await getInvite(id))
		})();
	
	}, [!!invite]);

	useEffect(() => {
		document.title = "QRSec - Ver invitación"
	  }, [])

    return (
		<>
        {!!invite ? (
            <>
            <br />
			  <QRCodeComponent id={ id } />
			<br />
			<Typography variant='h5'>¿Cómo llegar? Presiona el punto para abrir Maps</Typography>
			<Map position={{lat: invite.owner.address.location.coordinates[0], lng: invite.owner.address.location.coordinates[1]}}/>
			<br />
            </>
        ):<Typography variant='h5'>Invitación invalida</Typography>}
        </>
    )
}
