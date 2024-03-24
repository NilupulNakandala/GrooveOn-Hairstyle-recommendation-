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

  const captureImage = async () => {
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
  const handleUploadPhoto = async () => {
    try {
      const response = await fetch('http://localhost:3000/get-item/res',{method:'GET'}); 

      

      if (response.ok) {
        const data = await response.json(); 
        const Oshape = data.predictionOutput;
        console.log('Response from server:', data);
        const shape = data.shape;
        switch (Oshape) {
          case 'heart\r\n':
            window.location.href = '/Heart'; 
            break;
          case 'diamond\r\n':
            window.location.href = '/Diamond'; 
            break;
          case 'square\r\n':
            window.location.href = '/Square'; 
            break;
          case 'round\r\n':
            window.location.href = '/Round'; 
            break;
          case 'oblong\r\n':
            window.location.href = '/Oblong'; 
            break;
            
          default:
            console.warn('Unknown shape received:', shape);
            window.location.href = '/Home';
            break;
        }
        
      } else {
        console.error('Error fetching data:', await response.text());
        window.location.href = '/Review'
        // Handle error response
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      window.location.href = '/Hairstyles'
      // Handle network or other errors
    }
  };

  

  return (
    <div className="camera-page-container">
      <h1 className="camera-page-title">Get your recommendation using</h1>

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
          <p></p>
            <button onClick={startCamera}>Camera</button>
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

        <label htmlFor="fileInput">Upload a Image:</label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* Button to upload the image to the database */}
        <button onClick={handleUploadPhoto}>Upload</button>
      </div>
    </div>
  );
};

export default CameraPage;
