import React, { Fragment, useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'

export function QRCodeComponent( { id } ) {

	const [width, setWidth] = useState(0)
  	const ref = useRef(null)

  	useEffect(() => {
    	setWidth(ref.current.clientWidth)
  	})

  	return (
    	<Fragment>
			<div ref={ref}>
				<QRCode value={ id } bgColor="rgba(0,0,0,0)" fgColor="white" level="H" size={ width }/>
			</div>
		</Fragment>
  	)
}
