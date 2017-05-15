'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';


class Albums extends Component {
  constructor(props){
    super(props);
    this.state = {
      albums: props.albumsData
    };
  }

  render(){
    return (
      <div className="col-xs-10">
        <h3>Albums</h3>
          <div className="row">
        { this.state.albums.map(album => {
          return (
          <div className="col-xs-4" key={album.id}>
            <a className="thumbnail" href="#">
              <img src={album.imageUrl} />
              <div className="caption">
                <h5>
                <span>{album.name}</span>
                </h5>
                <small>{album.songs.length} songs</small>
              </div>
            </a>
          </div>
          )
          })
        }
        </div>
      </div>
    )
  }
}

export default Albums;



// creating an anon function instead of a Class fn:
// export default function(props){
//   return (
//     <div className="col-xs-10">
//       <h3>Albums</h3>
//         <div className="row">
//         { props.albums.map(album => {
//           return (
//             <div className="col-xs-4" key={album.id}>
//               <a className="thumbnail" href="#">
//                 <img src={album.imageUrl} />
//                   <div className="caption">
//                     <h5>
//                     <span>{album.name}</span>
//                     </h5>
//                     <small>{album.songs.length} songs</small>
//                   </div>
//                 </a>
//               </div>
//               )
//               })
//             }
//             </div>
//           </div>
//   )
// }
