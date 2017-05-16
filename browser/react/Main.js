'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import fakeAlbums from './fakeAlbums';
import axios from 'axios';



class MainDiv extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: [   ],
      selectedAlbum: {  }
    }
  }

  componentDidMount(){
    const toJson = response => response.data;
    // const log = console.log.bind(console);
    const logError = console.error.bind(console);

    axios.get('api/albums')
      .then(toJson)
      .then(albums => {
        albums.map(album => {
          album.imageUrl = `/api/albums/${album.id}/image`;
          return album;
        });
        this.setState({ albums: albums })
      ).catch(logError);
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
