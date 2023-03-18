import Login from '../Pages/Login'
import Logon from '../pages/Logon';
import TaskList from '../pages/TaskList'
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { PrivateRoutes } from '.';

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/"      element={ <Login /> }/>
          <Route path="/Login" element={ <Login /> }/>
          <Route path="/Logon" element={ <Logon /> }/>
          <Route path="/home"  element={<Login />} >
            <Route element={ <TaskList /> }  />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};