import React, { useEffect, useState } from "react";
import TableContent from "../../TableContent/views";
// import "./Homepage.sass";
import axios from "axios";
import BaseURL from "../../../config/httpConfig/baseURL";
export default function Homepage(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BaseURL + "/api/list").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>List of Cows</h1>
      {data.map((cow, index) => {
        return <TableContent key={index} data={cow} index={index} />;
      })}
    </div>
  );
}
