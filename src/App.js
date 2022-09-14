import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/views";
import NavigationBar from "./components/NavigationBar/views";
import CowPage from "./components/CowPage/views";
import AllCow from "./components/AllCow/views";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cow/:id" element={<CowPage />} />
        <Route path="/allcow" element={<AllCow />} />
      </Routes>
    </>
  );
}

export default App;
