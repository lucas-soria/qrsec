import React, { Fragment, useEffect, useState } from 'react'
import { InviteInfo } from '../components/ScanInvite/InviteInfo'
import { QrScanner } from '../components/ScanInvite/QrScanner'

export function ScanInvite () {

    const [state, setState] = useState(false)

    const [data, setData] = useState();

    useEffect(() => {
        document.title = "QRSec - Escanear invitaciones"
      }, [])

    return (
        <Fragment>
            <br />
            <QrScanner setData={ setData } state={ state } setState={ setState }/>
            <br /><br />
            {data &&(
                <InviteInfo id={ data } state={ state } />
            )}
        </Fragment>
    )
}
