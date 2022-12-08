import React from "react";
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from "./ManufacturerForm";
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';
import AutomobileForm from "./AutomobileForm";
import AutomobileList from "./AutomobileList";
import CustomerForm from './CustomerForm';
import SalesPersonForm from './SalesPersonForm';
import SalesRecordList from './SalesRecordList';
import SalesRecordForm from './SalesRecordForm';
import SaleHistory from './SaleHistory';

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
              <Route path="new/" element={<AutomobileForm />} />
              <Route path="" element={<AutomobileList />} />
            </Route>
            <Route path='customers' element={<CustomerForm/>}/>
            <Route path='salespeople' element={<SalesPersonForm/>}/>
            <Route path='salesrecords' element={<SalesRecordList salesrecords={props.salesrecords}/>}/>
            <Route path='salesrecords/new' element={<SalesRecordForm/>}/>
            <Route path='salehistory' element={<SaleHistory salesrecords={props.salesrecords}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


