import React, { useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'

export function Map( { position } ) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_API
  })

  const [map, setMap] = useState(null)

  console.log(map)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);
    map.setZoom(17);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=" + position.lat + "," + position.lng );
  };


  return isLoaded ? (
      <GoogleMap
        mapContainerClassName="map-container"
        center={position}
        onLoad={onLoad}
        zoom={17}
        defaultZoom={17}
        onUnmount={onUnmount}
      >
        <Marker position={position} onClick={showInMapClicked} />
      </GoogleMap>
  ) : <></>
}
