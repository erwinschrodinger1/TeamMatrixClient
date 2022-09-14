import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/views";
import NavigationBar from "./components/NavigationBar/views";
import CowPage from "./components/CowPage/views";
function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cow/:id" element={<CowPage />} />
      </Routes>
    </>
  );
}

export default App;
