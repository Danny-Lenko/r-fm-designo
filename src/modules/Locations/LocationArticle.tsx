import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Container from '@mui/material/Container';
import MobileContainer from '../../library/common/components/MobileContainer/MobileContainer';


const LocationArticle = () => {

   // const articleStyles = {
   //    height
   // }

   return (

      <MobileContainer>

         <h1>hello container</h1>

      </MobileContainer>

      // <MapContainer
      //    center={[51.505, -0.09]}
      //    zoom={13}
      //    scrollWheelZoom={false}
      //    style={{ height: '50vh', width: '50vw' }}
      // >
      //    <TileLayer
      //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //    />
      //    <Marker position={[51.505, -0.09]}>
      //       <Popup>
      //          A pretty CSS3 popup. <br /> Easily customizable.
      //       </Popup>
      //    </Marker>
      // </MapContainer>


   );
}

export default LocationArticle;