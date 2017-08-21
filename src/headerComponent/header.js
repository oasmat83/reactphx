import React, { Component } from 'react';
import Searchbox from '../headerComponent/searchComponenet/search';

class Header extends Component {
    
    render() {
      return (
        <div>
            <div className="header-wrap">
                <div className="logoBox">
                    <h1><a href="">Worldox</a></h1>
                </div>
            
                <div className="settingsWrap" >
                
                </div>

                <div className="searchWrap">
                    <Searchbox/>
                </div>
            
            </div>
            <div className="head-nav-wrap"></div>
        </div>
      );
    }
  }
  
  export default Header;