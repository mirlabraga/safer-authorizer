import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";
import PatientDashboard from "./pages/PatientDashboard";

const App = () => {
  
  return (
    <BrowserRouter>
      <div data-testid="router-element">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/callback" element={<PatientDashboard />}></Route>
          <Route path="/clinics" element={<PatientDashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;