import React, { useState, useRef } from 'react';
import './CameraPage.css';
import leftImage from "/public/assets/camera/left.jpeg"; 
import rightImage from "/public/assets/camera/right.jpg"; 


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
      const response = await fetch('http://localhost:3001/get-item/res',{method:'GET'}); 

      // const data = await response.json(); 
      // const Oshape = data.predictionOutput;
      // console.log('Response from server:', data);
      // const shape = data.shape;

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
            window.location.href = '/Errorpage';
            break;
        }
        
      } else {
        console.error('Error fetching data:', await response.text());
        window.location.href = '/Errorpage'
        // Handle error response
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      window.location.href = '/Errorpage'
      // Handle network or other errors
    }
  };

  

  return (
    <div className="camera-page-container">
      <h1 className="camera-page-title">Find Your Style</h1>

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
            <div className="button-container">
              <img src={leftImage} alt="Left" className="rounded-circle side-image" />
              <button id="start-camera" onClick={startCamera} className="btn btn-primary">Start Camera</button>
              <img src={rightImage} alt="Right" className="rounded-circle side-image" />
            </div>
            {imageSrc && (
              <div>
                <img src={imageSrc} alt="Captured" className="captured-image" />
                <p className="text-center">Preview of Captured Image</p>
              </div>
            )}
          </>
        )}

        {cameraStream && (
          <button id="capture-image" onClick={captureImage} className="btn btn-primary">Capture Image</button>
        )}
      </div>

      <div className="upload-section">
        {imageSrc && (
          <div>
            <img src={imageSrc} alt="Captured" className="captured-image" />
            <p className="text-center">Preview of Upload Image</p>
          </div>
        )}

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button id="upload-photo" onClick={handleUploadPhoto} className="btn btn-primary">Select Already Taken Photo</button>
        <p className="text-center mt-4">
        Thank you for using our camera feature. We will be using your face data for the development of our machine learning model.
      </p>
      </div>
    </div>
  );
};

export default CameraPage;
