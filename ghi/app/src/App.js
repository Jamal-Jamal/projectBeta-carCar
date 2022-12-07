import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
// import "./App.css";
import { useEffect } from "react";
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleModelForm from "./VehicleModelForm";
import VehicleModelList from "./VehicleModelList";
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/">
              <Route path="" element={<ManufacturerList />} />
              <Route path="new/" element={<ManufacturerForm />} />
          </Route>
          <Route path="models/">
              <Route path="" element={<VehicleModelList />} />
              <Route path="new/" element={<VehicleModelForm />} />
          </Route>
          <Route path="automobiles/">
              <Route path="" element={<AutomobileList />} />
              <Route path="new/" element={<AutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
