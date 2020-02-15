import React from 'react';

export default class Stream extends React.Component{

  playVideoFromCamera() {
    const constraints = { 'video': true, 'audio': true };

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      const videoElement = document.querySelector('video#camera');
      videoElement.srcObject = stream;
    }).catch(error => {
      console.error('Error', error);
    });

  }

  render(){
    this.playVideoFromCamera();
    return (
      <div>
        <video id="camera" autoPlay playsinline></video><br />
        <button>Start streaming</button>
      </div>
    );
  }
}