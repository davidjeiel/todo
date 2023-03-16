import Login  from '../Pages/Login'
import TaskList from '../pages/TaskList'
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={ <TaskList /> }/>
          <Route path="/"  element={<Login />} >
            <Route element={ <TaskList /> }  />
          </Route>
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;