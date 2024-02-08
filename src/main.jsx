
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import Map, { Marker, Popup } from 'react-map-gl'
import { useState } from 'react'

import 'mapbox-gl/dist/mapbox-gl.css'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZXJ6ayIsImEiOiJjbHNkbWYzaHYxMmdtMmtvNnMxdGVlYjZoIn0.ILGOPb2X82sHmejxLrNu4A' 

function Root() {
  const [viewState, setViewState] = React.useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
  })
  const [showPopup, setShowPopup] = useState(true)

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: '90vw', height: '90vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" draggable />
      {showPopup && (
        <Popup
          longitude={-100}
          latitude={40}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          You are here
        </Popup>
      )}
    </Map>
  )
}

const root = createRoot(
  document.body.appendChild(document.createElement('div'))
)
root.render(<Root />)
