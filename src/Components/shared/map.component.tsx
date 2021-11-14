import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  Tooltip,
} from 'react-leaflet';
import { IMapProps, MapDataProp } from '../../Interfaces';
import geojson from '../../data/BorderCoordinates.json';

const LeafletMap = ({
  styles,
  mapCoords,
  countryName,
  countryCapital,
  zoom,
}: IMapProps) => {
  const { center, capital } = mapCoords;
  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={zoom}
      style={styles}
      attributionControl={false} 
    >
      <TileLayer
        attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong>
        <a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
        url='https://api.mapbox.com/styles/v1/ilyabarachenia/ckm8feo8d5bpy17nwutokr1pc/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWx5YWJhcmFjaGVuaWEiLCJhIjoiY2ttOGVyNms5MTc3OTJ4bjYxajU1N2k1eSJ9.49u08zJ_FXW9gLuev6V0xw'
      />
      <Marker position={[capital.latitude, capital.longitude]}>
        <Popup>{countryCapital}</Popup>
        <Tooltip>{countryCapital}</Tooltip>
      </Marker>
      <GeoJSON data={(geojson as MapDataProp)[countryName]} />
    </MapContainer>
  );
};

export default LeafletMap;
