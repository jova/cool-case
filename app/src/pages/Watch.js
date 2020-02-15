import React from 'react';

export default class Watch extends React.Component{
  render(){
    //this.playVideoFromCamera();
    return (
      <div>
        <video id="camera" controls></video>
      </div>
    );
  }
}