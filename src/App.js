import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./containers/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;
