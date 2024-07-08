import React, { useEffect, useRef, useState } from 'react';
import HomeCard from '../../components/HomeCard';

const Home = () => {
  const mapRef = useRef(null);
  const [gpsData, setGpsData] = useState({ latitude: 28.4595, longitude: 77.0266 }); // Replace with actual data
  const [waypoints, setWaypoints] = useState([
    { lat: 28.457969853479934, lng: 77.07122553158761 },
    { lat: 28.449639184765605, lng: 77.06397902872078 },
    { lat: 28.44665834136965, lng: 77.06105881028576 },
    { lat: 28.436264031980446, lng: 77.05099102993528 },
    { lat: 28.428402734124262, lng: 77.03737686390609 },
    { lat: 28.27191773169594, lng: 77.06817012724015 },
    { lat: 28.27191773169594, lng: 77.06817012724015 },
  ])

  useEffect(() => {
    const initMap = () => {
      const latitude = parseFloat(gpsData.latitude);
      const longitude = parseFloat(gpsData.longitude);

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: latitude, lng: longitude },
        zoom: 15,
        disableDefaultUI: true,
      });

      const busCoords = { lat: latitude, lng: longitude };

      const marker = new google.maps.Marker({
        position: busCoords,
        map: map,
        icon: {
          url: '/path/to/favicon.png', // Replace with actual path
          scaledSize: new google.maps.Size(45, 45), // Setting the desired width and height
        },
      });

      const bounds = new google.maps.LatLngBounds();

      const waypointsForDirections = waypoints.slice(1, waypoints.length - 1).map(waypoint => ({
        location: new google.maps.LatLng(waypoint.lat, waypoint.lng),
        stopover: true,
      }));

      const directionsService = new google.maps.DirectionsService();
      const request = {
        origin: new google.maps.LatLng(waypoints[0].lat, waypoints[0].lng),
        destination: new google.maps.LatLng(waypoints[waypoints.length - 1].lat, waypoints[waypoints.length - 1].lng),
        waypoints: waypointsForDirections,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          const directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            directions: response,
            suppressMarkers: true,
          });

          addWaypointMarkers(map, waypoints, response.routes[0].legs);
        }
      });

      const addWaypointMarkers = (map, waypoints, legs) => {
        for (let i = 0; i < legs.length; i++) {
          new google.maps.Marker({
            map: map,
            position: legs[i].start_location,
            label: String.fromCharCode(65 + i), // A, B, C, ...
          });
        }
      };
    };

    initMap();
  }, [gpsData, waypoints]);

  return (
    <>
      <div className="homeComponent">
        <div className="homecards">
          <HomeCard topic={'Bus Route'} description={'H4'} icon={'directions_bus'}></HomeCard>
          <HomeCard topic={'ETA'} description={'12 minutes'} icon={'schedule'}></HomeCard>
          <HomeCard topic={'Stop Name'} description={'Subhash Chowk'} icon={'pin_drop'}></HomeCard>
        </div>
        <div ref={mapRef} style={{ height: '40vh', width: '80vw', margin: '20px auto', borderRadius: '30px'}}></div>
      </div>      
    
    </>


  );
};

export default Home;
