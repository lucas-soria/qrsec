import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Map } from '../components/ShowInvite/Map'
import { QRCodeComponent } from '../components/ShowInvite/QRCode'

export function ShowInvite() {

    const { id } = useParams()

    return (
      <Fragment>
          <h1>ID: { id }</h1>
		  <QRCodeComponent id={ id } />
		  <Map />
      </Fragment>
    )
}
