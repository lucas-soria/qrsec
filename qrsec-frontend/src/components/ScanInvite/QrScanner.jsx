import { DoDisturb, QrCodeScanner } from '@mui/icons-material';
import { Button } from '@mui/material';
import QRReader from 'qrreader';
import React, { Fragment, useEffect } from 'react';


export function QrScanner( { setData, state, setState } ) {

    var qrCodeReader

    const handleClick = () => {
        if (state) {
            setState(false)
            stop()
        } else {
            setState(true)
        }
    }

    // start Capture
    const start = (videoElement) => {
        qrCodeReader.startCapture(videoElement)
            .then((result) => {
                setData(result)
                setState(false)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // stop Capture
    const stop = () => {
        if (!!qrCodeReader) qrCodeReader.stopCapture()
    }

    useEffect(() => {

        if (QRReader) {
            qrCodeReader = new QRReader();
            const videoElement = document.querySelector('video');
            start(videoElement)
        }

    }, [QRReader, state]);

    return (
        <Fragment>
            {state && (
                <video  
                    autoPlay={true}
                    id="video"
                    muted={true}
                    style={{width: "100%"}}
                />
            )}
            <Button variant='contained' startIcon={ state ? <DoDisturb fontSize='large' /> : <QrCodeScanner fontSize='large' /> } onClick={ handleClick }>{ state ? "Cancelar" : "Escanear" }</Button>
        </Fragment>
    );
}
