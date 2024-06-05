import { Fade } from "react-awesome-reveal";

import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';

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
