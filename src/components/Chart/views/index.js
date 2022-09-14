import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
export default function Charts(prop) {
  ChartJS.register(LineElement, PointElement, LinearScale, Title);
  console.log(prop.data);
  return (
    <div>
      <Line data={prop.data} />
    </div>
  );
}
