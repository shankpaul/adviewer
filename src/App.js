import React from 'react';
import { Container, Image, Divider, Grid } from 'semantic-ui-react'
// import { BrowserRouter, Route, Link, withRouter, Switch } from "react-router-dom";
import TopMenu from './components/TopMenu'
import Routes from "./routes"
import './App.css';


function App() {
  return (
    <Container>
    <TopMenu />
    <Grid columns={2} divided>
      <Grid.Row> 
        <Grid.Column width={10}> 
          <Image src='/banner.jpg' position='left' size='big' />
        </Grid.Column>
        <Grid.Column width={6}>
          <Routes />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider />
    <div align='center'>© Copyright www.adviewer.com</div>
    </Container>
  );
}

export default App;
