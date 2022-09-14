import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "../../../index.png";
import axios from "axios";
import BaseURL from "../../../config/httpConfig/baseURL";
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
export default function CowPage() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const params = useParams();
  console.log(params);
  const position = [27.61933, 85.537292];

  const icon = new L.icon({
    iconUrl: Icon,
    iconSize: [25, 25],
  });

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    axios.post(BaseURL + "/api/getCow", { name: params.id }).then((res) => {
      setTemp(res.data.temp);
    });
  }, []);

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

  const labels = Array.from({ length: temp.length }, (_, i) => i + 1);

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="CowPage">
      <h1>Cow Name: {params.id}</h1>
      <h2>Temperatures: </h2>
      {/* {temp.map((tempIn) => (
        <p>{tempIn}</p>
      ))} */}
      <Line options={options} data={data} />
      <div className="map">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>{params.id}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
