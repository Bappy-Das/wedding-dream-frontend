import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFwcHk0NTM4IiwiYSI6ImNsZmk0ZWt2MDRmczgzem50ZzRxMG1mejgifQ.auf7PbxlpIKNjpqFoacfNg';

const Map = () => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [90.417394, 23.758161],
      zoom: 15
      });
       
      // Create a default Marker and add it to the map.
      const marker1 = new mapboxgl.Marker({ color: 'black' })
      .setLngLat([90.417394, 23.758161])
      .addTo(map);

   },[])
    return (
      <div className='px-14'>
        <div className='rounded-lg' id='map'></div>
      </div>
    );
};

export default Map;
