import React, { useState, useRef } from 'react';
import './CameraPage.css';

const CameraPage = () => {
  const [cameraStream, setCameraStream] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL('image/png');
    setImageSrc(dataUrl);

    // Stop the camera stream after capturing the image
    if (cameraStream) {
      const tracks = cameraStream.getTracks();
      tracks.forEach((track) => track.stop());
      setCameraStream(null);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="camera-page-container">
      <h1 className="camera-page-title">Camera Page</h1>

      <div className="camera-section">
        {cameraStream ? (
          <video
            id="camera-preview"
            className="camera-preview"
            autoPlay
            playsInline
            ref={videoRef}
          ></video>
        ) : (
          <>
            <button onClick={startCamera}>Start Camera</button>
            {imageSrc && (
              <div>
                <img src={imageSrc} alt="Captured" className="captured-image" />
                <p>Preview of Captured Image</p>
              </div>
            )}
          </>
        )}

        {cameraStream && (
          <button onClick={captureImage}>Capture Image</button>
        )}
      </div>

      <div className="upload-section">
        {imageSrc && (
          <div>
            <img src={imageSrc} alt="Captured" className="captured-image" />
            <p>Preview of Upload Image</p>
          </div>
        )}

        <label htmlFor="fileInput">Upload Image:</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default CameraPage;
