import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksList, Navigation } from './Components';
import { PUBLIC_ROUTES } from './Constants';
import CreateTask from './Components/CreateTask/CreateTask';
import UpdateTask from './Components/UpdateTask';

const App: FC = (): JSX.Element => {

  return <div>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<TasksList />} path={PUBLIC_ROUTES.HOME} />
        <Route element={<CreateTask/>}path={PUBLIC_ROUTES.CREATE_TASK}/>
        <Route element={<UpdateTask/>} path={PUBLIC_ROUTES.UPDATE_TASK}/>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
