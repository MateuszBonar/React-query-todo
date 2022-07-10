import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TasksList, Navigation } from './Components';

import './App.css';

const App: FC = (): JSX.Element => {

  return <div>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route element={<TasksList />} path={'/'} />
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
