'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

class SingleAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
<div className="album col-xs-10">
  <div>
    <h3>I SHOULD BE AN ALBUM NAME</h3>
    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
  </div>
  <table className='table'>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Artists</th>
        <th>Genre</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play"></span>
          </button>
        </td>
        <td>I SHOULD BE A SONG NAME</td>
        <td>I SHOULD BE A STRING OF THIS SONGS ARTISTS</td>
        <td>I SHOULD BE A SONG GENRE</td>
      </tr>
      <tr>
        <td>
          <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play"></span>
          </button>
        </td>
        <td>I SHOULD BE ANOTHER SONG NAME</td>
        <td>I SHOULD BE A STRING OF THAT SONGS ARTISTS</td>
        <td>I SHOULD BE A SONG GENRE</td>
      </tr>
    </tbody>
  </table>
</div>

    );
  }
}

export default SingleAlbum;
