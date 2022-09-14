import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "../../../cow.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
let temp1 = [81, 92, 83, 84, 95, 86, 87, 88, 89, 90];
let temp2 = [84, 98, 73, 84, 91, 80, 78, 81, 84, 99];
let temp3 = [89, 92, 71, 88, 95, 82, 74, 89, 80, 98];
export default function AllCow() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const icon = new L.icon({
    iconUrl: Icon,
    iconSize: [32, 32],
  });
  const position1 = [27.61933, 85.537292];
  const position2 = [27.61933, 85.537382];
  const position3 = [27.61933, 85.537572];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = Array.from(
    { length: Math.max(temp1.length, temp2.length, temp3.length) },
    (_, i) => i + 1
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature Cow1",
        data: temp1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Temperature Cow2",
        data: temp2,
        borderColor: "rgb(25,2, 132)",
        backgroundColor: "rgba(25,2, 132, 0.5)",
      },
      {
        label: "Temperature Cow3",
        data: temp3,
        borderColor: "rgb(25,20, 255)",
        backgroundColor: "rgba(25,20,255, 0.5)",
      },
    ],
  };

  return (
    <div>
      <h1>Graph Showing the Temperature Difference</h1>
      <Line options={options} data={data} />
      <h1>Map locating all the cows</h1>
      <div className="map">
        <MapContainer
          center={position3}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position1} icon={icon}>
            <Popup>Cow1</Popup>
          </Marker>
          <Marker position={position2} icon={icon}>
            <Popup>Cow2</Popup>
          </Marker>
          <Marker position={position3} icon={icon}>
            <Popup>Cow3</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
