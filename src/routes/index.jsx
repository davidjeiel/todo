import Login from '../Pages/Login';
import Logon from '../pages/Logon';
import Panel from '../pages/Panel';
import { Fragment } from "react";
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from "react-router-dom";

export const RoutesApp = () => 
{
  

  return (
    
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/"      element={ <Panel /> }/>
            <Route path="/Login" element={ <Login /> }/>
            <Route path="/Logon" element={ <Logon /> }/>
          </Routes>
        </Fragment>
      </BrowserRouter>
    
  );
};