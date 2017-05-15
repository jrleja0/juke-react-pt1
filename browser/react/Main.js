'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import fakeAlbums from './fakeAlbums';


class MainDiv extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: fakeAlbums
    }
  }

  render(){
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar  />
        </div>
        <Albums albumsData={this.state.albums} />
        <Footer />
      </div>
    );
  }
}

export default MainDiv;
