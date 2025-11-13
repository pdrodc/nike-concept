import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const nikeIcon = new L.Icon({
  iconUrl: "/logo.png",
  iconSize: [40, 40], // tamanho da imagem no marcador
  iconAnchor: [20, 40], // ponto da imagem que corresponde à coordenada do mapa (meio em baixo)
  popupAnchor: [0, -40], // posição do popup em relação ao ícone
  shadowUrl: "",
});

const nikeStores = [
  {
    name: "Nike NYC (Fifth Avenue)",
    location: [40.763213, -73.972389],
    country: "USA",
  },
  {
    name: "Nike Chicago (Michigan Avenue)",
    location: [41.894741, -87.624095],
    country: "USA",
  },
  {
    name: "Nike London (Oxford Street)",
    location: [51.514463, -0.14027],
    country: "UK",
  },
  {
    name: "Nike Manchester (Arndale Shopping Centre)",
    location: [53.486592, -2.241698],
    country: "UK",
  },
  {
    name: "Nike Tokyo (Shibuya)",
    location: [35.659494, 139.700518],
    country: "Japan",
  },
  {
    name: "Nike Kyoto (Shijo Street)",
    location: [35.003814, 135.768179],
    country: "Japan",
  },
  {
    name: "Nike São Paulo (JK Iguatemi)",
    location: [-23.595424, -46.682418],
    country: "Brazil",
  },
  {
    name: "Nike Rio de Janeiro (VillageMall)",
    location: [-22.973973, -43.225501],
    country: "Brazil",
  },
  {
    name: "Nike Shanghai (Nanjing Road)",
    location: [31.233334, 121.46917],
    country: "China",
  },
  {
    name: "Nike Beijing (Wangfujing)",
    location: [39.904202, 116.407394],
    country: "China",
  },
  {
    name: "Nike Paris (Champs-Élysées)",
    location: [48.869748, 2.307822],
    country: "France",
  },
  {
    name: "Nike Berlin (Kurfürstendamm)",
    location: [52.50232, 13.330101],
    country: "Germany",
  },
  {
    name: "Nike Sydney (Pitt Street Mall)",
    location: [-33.871475, 151.20699],
    country: "Australia",
  },
  {
    name: "Nike Toronto (Eaton Centre)",
    location: [43.654548, -79.380067],
    country: "Canada",
  },
  {
    name: "Nike Mexico City (Polanco)",
    location: [19.434265, -99.206241],
    country: "Mexico",
  },
];

export default function NikeGlobalMap() {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={3}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors & CartoDB"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        noWrap={true}
      />

      {nikeStores.map((store, idx) => (
        <Marker key={idx} position={store.location} icon={nikeIcon}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
