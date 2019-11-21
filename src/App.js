import React from 'react';
import { Container, Divider } from 'semantic-ui-react'
import TopMenu from './components/TopMenu'
import Routes from "./routes"
import './App.css';


function App() {
  return (
    <Container>
      <TopMenu />
      <Routes />
      <Divider />
      <div align='center'>© Copyright www.adviewer.com</div>
    </Container>
  );
}

export default App;
