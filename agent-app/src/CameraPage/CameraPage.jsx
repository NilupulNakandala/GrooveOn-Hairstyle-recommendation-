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
      const response = await fetch('http://localhost:3000/get-item/res'); 
      
      if (response.ok) {
        const data = await response.json(); 
        console.log('Response from server:', data);
        const shape = data.shape;
        if (shape === 'stdout: diamond') {
          window.location.href = '/about';
        } else if (shape === 'stdout: heart') {
          window.location.href = '/about';
        } else if(shape === 'stdout: oblong'){
          window.location.href = '/about'
        }else if (shape === 'stdout: square') {
          window.location.href = '/about';
        }else if (shape === 'stdout: round') {
          window.location.href = '/about';
        }else {
          console.warn('Unknown shape received:', shape);
        }
        // Handle successful response (e.g., display data, update UI)
      } else {
        console.error('Error fetching data:', await response.text());
        // Handle error response
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle network or other errors
    }
  };

  const uploadImage = async () => {
    // Send the captured or uploaded image to the backend
    try {
      const response = await fetch('http://localhost:3000/get-item/res', {//'/api/upload'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageSrc.split(',')[1] }), // Extracting the base64 data part
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Image uploaded successfully:', result);
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
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

        {/* Button to upload the image to the database */}
        <button onClick={handleUploadPhoto}>Photo Upload</button>
      </div>
    </div>
  );
};

export default CameraPage;
