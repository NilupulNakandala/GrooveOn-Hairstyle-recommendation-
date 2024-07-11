import { useState, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import './CameraPage.css'
import leftImage from '/public/assets/camera/left.jpeg'

const CameraPage = () => {
  const [imageSrc, setImageSrc] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const webcamRef = useRef(null)

  const handleUploadPhoto = async () => {
    if (!imageSrc) {
      alert('Please select or capture an image first.')
      return
    }

    setIsLoading(true)
    setTimeout(async () => {
      try {
        const formData = new FormData()
        formData.append('file', imageSrc)

        const response = await fetch(
          'http://localhost:3001/groove/recommendation',
          {
            method: 'POST',
            body: formData,
          }
        )

        const data = await response.json()

        if (data?.imageUpdated?.type && response.ok) {
          const Oshape = data?.imageUpdated?.type
          setImageSrc(null)
          setIsLoading(false)
          if (Oshape === 'heart') {
            window.location.href = '/Heart'
          } else if (Oshape === 'diamond') {
            window.location.href = '/Diamond'
          } else if (Oshape === 'square') {
            window.location.href = '/Square'
          } else if (Oshape === 'round') {
            window.location.href = '/Round'
          } else if (Oshape === 'oblong') {
            window.location.href = '/Oblong'
          } else {
            window.location.href = '/Errorpage'
          }
        } else {
          setIsLoading(false)
          window.location.href = '/Errorpage'
        }
      } catch (error) {
        setIsLoading(false)
        window.location.href = '/Errorpage'
      }
    }, 2000)
  }

  const handleCapturePhoto = async () => {
    const imageSrc = webcamRef.current.getScreenshot()
    const response = await fetch(imageSrc)
    const blob = await response.blob()
    setImageSrc(blob)
    setIsCameraOpen(false)
  }

  useEffect(() => {
    if (imageSrc) {
      handleUploadPhoto()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc])

  return (
    <div className="camera-page-container" style={{ marginTop: '40px' }}>
      {isLoading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <h1
            className="camera-page-title"
            style={{ fontWeight: '500', textTransform: 'uppercase' }}
          >
            Find Your Style
          </h1>
          <div className="upload-section">
            <img
              src={leftImage}
              alt="Left"
              className="rounded-circle side-image"
              style={{ padding: '20px 0px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={(e) => setImageSrc(e.target.files[0])}
              />
              {/* <button
                className="btn btn-primary"
                style={{ height: '50px', marginTop: '5px', marginLeft: '2px' }}
                onClick={handleUploadPhoto}
              >
                Submit
              </button> */}
              <button
                className="btn btn-secondary"
                style={{ height: '50px', marginTop: '10px', marginLeft: '2px' }}
                onClick={() => setIsCameraOpen(true)}
              >
                Camera
              </button>
            </div>
            {isCameraOpen && (
              <div className="camera-container" style={{ marginTop: '20px' }}>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                />
                <button
                  className="btn btn-success"
                  style={{ marginTop: '10px' }}
                  onClick={handleCapturePhoto}
                >
                  Capture Photo
                </button>
              </div>
            )}
            <p className="text-center mt-4">
              Thank you for using our camera feature. We will be using your face
              data for the development of our machine learning model.
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default CameraPage
