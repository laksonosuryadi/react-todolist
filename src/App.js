import React, { Component } from 'react';
import { Header, Content, Search } from './components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Search />
          <Content />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
