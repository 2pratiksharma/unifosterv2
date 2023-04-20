import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import InternationalStudents from "./pages/International/InternatinalStudents";
import StudentServices from "./pages/Services/StudentServices";
import AboutUs from "./pages/AboutUs/AboutUs";
import USA from "./components/USA/USA";
import UK from "./components/UK/UK";
import AUS from "./components/Australia/AUS";
import EUR from "./components/Europe/EUR";
import CAN from "./components/Canada/CAN";
import WhatsApp from "./components/popups/WhatsApp";
import RegisterYourself from "./components/form/RegisterYourself";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<InternationalStudents />} />
          <Route path="/services" element={<StudentServices />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/USA" element={<USA />} />
          <Route path="/UK" element={<UK />} />
          <Route path="/Australia" element={<AUS />} />
          <Route path="/Europe" element={<EUR />} />
          <Route path="/Canada" element={<CAN />} />
          <Route path="/ApplyNow" element={<RegisterYourself />} />
        </Routes>
      </BrowserRouter>
      <WhatsApp />
    </div>
  );
}

export default App;
