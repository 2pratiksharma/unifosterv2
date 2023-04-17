import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import InternationalStudents from "./pages/International/InternatinalStudents";
import StudentServices from "./pages/Services/StudentServices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<InternationalStudents />} />
          <Route path="/services" element={<StudentServices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
