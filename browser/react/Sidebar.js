'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#">ALBUMS</a>
            </h4>
          </section>
        </sidebar>
    );
  }
}

export default Sidebar;
