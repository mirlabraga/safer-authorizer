import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PatientDashboard from "./pages/PatientDashboard";
import Login from "./authentication/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/callback" element={<Navigate to="login" />}></Route>

          <Route path="/clinics" element={<PatientDashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;