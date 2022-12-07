import React from "react";
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleModelForm from './VehicleModelFrom';
import VehicleModelList from './VehicleModelList';
import AutomobileForm from "./AutomobileForm";
import AutomobileList from "./AutomobileList";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


function App(props) {
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
