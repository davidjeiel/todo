import Login from '../Pages/Login';
import Logon from '../pages/Logon';
import Panel from '../pages/Panel';
import TaskList from '../pages/TaskList';
import { Fragment } from "react";
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from "react-router-dom";
// import { PrivateRoutes } from './PrivateRoute';
// import { authMailPassProvider as Provider } from '../contexts/authMailPassContext';

export const RoutesApp = () => {
  return (
    
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/"      element={ <Panel /> }/>
            <Route path="/Login" element={ <Login /> }/>
            <Route path="/Logon" element={ <Logon /> }/>
            <Route path="/Tarefas" element={ <TaskList /> }/>
            {/* <Route element={<PrivateRoutes /> }>
              <Route path="/home" element={<TaskList />} />
            </Route>             */}
          </Routes>
        </Fragment>
      </BrowserRouter>
    
  );
};