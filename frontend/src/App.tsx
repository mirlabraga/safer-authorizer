import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./authentication/Login";

const App = () => {
  
  return (
    <BrowserRouter>
      <div data-testid="router-element">
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;