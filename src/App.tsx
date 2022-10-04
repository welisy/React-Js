
// import { useState } from "react";

import './App.css';
import './Style.scss';
import Button from 'react-bootstrap/Button';
import { AppRoutes } from "./Routes";
import LeftMenu from './components/ui/Menu/LeftMenu';

function App() {

  return (
    <>
    <LeftMenu />
    <div id='main'>
    </div>
    <AppRoutes />
    </>

  );
}

export default App
