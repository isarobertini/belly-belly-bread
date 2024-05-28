import { useState } from 'react'
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import { Fade } from 'react-awesome-reveal';

import './App.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <main>
          <Fade>
            <Routes>{routes}</Routes>
          </Fade>
        </main>
      </BrowserRouter>

    </>
  );
};

export default App
