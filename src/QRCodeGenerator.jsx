import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerateQR = () => {
    setQrValue(inputValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text here"
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleGenerateQR}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate QR Code
      </button>
      <div style={{ marginTop: "20px" }}>
        {qrValue && (
          <>
            <h3>Your QR Code:</h3>
            <QRCodeCanvas value={qrValue} size={200} />
          </>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
