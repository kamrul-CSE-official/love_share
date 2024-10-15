import Peer from 'simple-peer';
import React, { useState, useEffect } from 'react';

const FileSharing = () => {
  const [peer, setPeer] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendFile = () => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      peer.send(reader.result);
    };
  };

  useEffect(() => {
    // Create a peer for P2P file sharing
    const newPeer = new Peer({
      initiator: true,
      trickle: false,
    });

    newPeer.on('signal', (data) => {
      console.log('Signal Data: ', data);
      // You would share this signal data using the QR code.
    });

    newPeer.on('connect', () => {
      console.log('Peer connected');
    });

    newPeer.on('data', (data) => {
      console.log('Received file data: ', data);
    });

    setPeer(newPeer);
  }, []);

  return (
    <div>
      <h1>File Sharing</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={sendFile}>Send File</button>
    </div>
  );
};

export default FileSharing;
