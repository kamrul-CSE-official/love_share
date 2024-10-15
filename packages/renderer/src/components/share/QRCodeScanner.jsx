import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRCodeScanner = ({ onScan }) => {
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      onScan(data);  // Trigger the connection or further actions with scanned data
    }
  };

  return (
    <div>
      <h2>Scan QR Code to Connect</h2>
      <QrReader
        delay={300}
        onError={(err) => console.error(err)}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {scanResult && <p>Scanned Data: {scanResult}</p>}
    </div>
  );
};

export default QRCodeScanner;
