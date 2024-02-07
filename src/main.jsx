import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// import ReactTooltip from 'react-tooltip'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json'

export default function MapChart() {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MapChart/>
  </React.StrictMode>
)
