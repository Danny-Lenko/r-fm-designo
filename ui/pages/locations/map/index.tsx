import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = ({ coords }: any) => {
   return (
      // <MapContainer
      //    center={coords}
      //    zoom={6}
      //    scrollWheelZoom={false}
      //    className='map-container'
      // >
      //    <TileLayer
      //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //    />
      //    <Marker position={coords} >
      //       <Popup>
      //          A pretty CSS3 popup. <br /> Easily customizable.
      //       </Popup>
      //    </Marker>
      // </MapContainer>

      <MapContainer
         center={coords}
         zoom={6}
         scrollWheelZoom={false}
         className='map-container'
      // style={{ height: "100%", width: "100%" }}
      >
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

         // url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=MY_ACCESS_TOKEN`}
         // attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
         />
         <Marker
            position={coords}
            draggable={true}
         // animate={true}
         >
            <Popup>Hey ! I live here</Popup>
         </Marker>
      </MapContainer>
   );
}

export default Map;