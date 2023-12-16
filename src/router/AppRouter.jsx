import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Author from '../pages/Author';
import HelpPage from '../pages/HelpPage';
import Navigation from '../components/Navigation';

const AppRouter = () => {
    return (
      <div className='App flex flex-col justify-center items-center'>
        <div>
          <Navigation />
        </div>
        <Routes>
          <Route path='/fast-rename-web' element={<HomePage />} />
          <Route path='/fast-rename-web/how-it-works' element={<HelpPage />} />
          <Route path='/fast-rename-web/author' element={<Author />} />
        </Routes>
      </div>
    )
  }
  
  export default AppRouter;
