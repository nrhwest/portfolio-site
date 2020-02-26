import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';


/*
  Tutorial used to help create site : https://www.youtube.com/watch?v=n8iA18R76jk&t=395s
*/

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" href="/landing_page" title="Nathan's Portfolio" scroll>
            <Navigation>
              <Link to="/landing_page">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/about_me">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Nathan's Portfolio">
            <Navigation>
              <Link to="/landing_page">Home</Link>  
              <Link to="/resume">Resume</Link>
              <Link to="/about_me">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
