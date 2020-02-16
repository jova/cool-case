import React from 'react';
import socket from '../socketContext'

export default class Watch extends React.Component{
  
  constructor(props) {
    super(props);
    this.startWatch = this.startWatch.bind(this);
  }

  async startWatch()
  {
    const peerConnection = new RTCPeerConnection();

    socket.on("answer", async (data) => {
      await peerConnection.setRemoteDescription(new RTCSessionDescription(data));
    });

    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    peerConnection.ontrack = this.gotRemoteStream;
  }

  gotRemoteStream(e)
  {
    const videoElement = document.querySelector("video#watch");
    if (videoElement.srcObject !== e.streams[0]) {
      videoElement.srcObject = e.streams[0];
      console.log('Received remote stream');
    }
    else console.log("cannot receive stream");
  }

  render(){
    return (
      <div>
        <video id="watch" controls></video>
        <br />
        <button onClick={this.startWatch}>Start Watch</button>
      </div>
    );
  }
}
