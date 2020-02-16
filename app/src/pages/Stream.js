import React from 'react';
import socket from '../socketContext'

export default class Stream extends React.Component{

  constructor(props) {
    super(props);
    this.startStream = this.startStream.bind(this);
  }

  async startStream()
  { 
    const peerConnection = new RTCPeerConnection();
    this.state.localStream.getTracks().forEach(track => peerConnection.addTrack(track, this.state.localStream));

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", offer);
  }

  componentDidMount()
  {
    const constraints = { video: true, audio: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        const videoElement = document.querySelector("video#stream");
        videoElement.srcObject = stream;
        this.setState({ localStream: stream });
      })
      .catch(error => {
        console.error("Error", error);
      });
  }

  render(){
    return (
      <div>
        <video id="stream" autoPlay playsInline></video>
        <br />
        <button onClick={this.startStream}>Start Streaming</button>
      </div>
    );
  }

}