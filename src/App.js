import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import Header from './headerComponent/header';


// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="wd-app ms-Grid">
        <div className="ms-Grid-row">
          <Header></Header>
        </div>
        <div className="ms-Grid-row">
            <div className="ms-Grid-col wd-app--leftNav">
            
             </div>

            <div className="ms-Grid-col wd-app--body">

            </div>
        </div>

      </div>
    );
  }
}

export default App;
