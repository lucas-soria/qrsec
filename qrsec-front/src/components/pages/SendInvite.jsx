import React, { Fragment, useState } from 'react'
import { Card, Button } from '@mui/material'
import { AddLink } from '@mui/icons-material'
import { SelectGuest } from './SendInvite/SelectGuest'
import { SelectDays } from './SendInvite/SelectDays'
import { SelectHours } from './SendInvite/SelectHours'
import { SelectMaxTime } from './SendInvite/SelectMaxTime'
import { SelectPassangers } from './SendInvite/SelectPassangers'
import { SwitchDrop } from './SendInvite/SwitchDrop'


export function EnviarInvitacion() {

    var invite = {}

    const [guest, setGuest] = useState("")
    
    const [days, setDays] = useState([])

    const [hours, setHours] = useState([ [] ])

    const [maxTime, setMaxTime] = useState()

    const [passangers, setPassangers] = useState()

    const [drop, setDrop] = useState()

    const handleCreate = () => {
        invite['guest'] = guest
        invite['days'] = days
        invite['hours'] = hours.filter( (hour) => hour.length > 0 )
        invite['maxTime'] = maxTime
        invite['passangers'] = passangers
        invite['drop'] = drop
        console.log(invite)
    }

    return (
        <Fragment>
            <SelectGuest guest={ guest } setGuest={ setGuest } />
            <SelectDays days={ days } setDays={ setDays } />
            <SelectHours hours={ hours } setHours={ setHours } />
            <SelectMaxTime setMaxTime={ setMaxTime } />
            <SelectPassangers setPassangers={ setPassangers } />
            <SwitchDrop setDrop={ setDrop } />
            <Card elevation={6} id='card' className='card-send'>
                <Button variant='contained' id='button-send' startIcon={<AddLink fontSize='large' />} onClick={ handleCreate } >Generar link</Button>
            </Card>
        </Fragment>
  )
}
