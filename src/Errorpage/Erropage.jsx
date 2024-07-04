import './Errorpage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Left from '/public/assets/camera/sorry.jpg'
import Right from '/public/assets/camera/sorry.jpg'

const Errorpage = () => {
  const redirectToCameraPage = () => {
    window.location.href = '/camerapage'
  }

  return (
    <div
      className="container"
      style={{ marginTop: '70px', marginBottom: '10px' }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="error-container">
            <div className="images-container">
              <img src={Left} alt="Left Image" className="error-image" />
              <h1 className="error-message">
                Face Couldn&apos;t Be Recognized
              </h1>
              <img src={Right} alt="Right Image" className="error-image" />
            </div>
            <p className="apology-text">
              We apologize for any inconvenience this may have caused. Rest
              assured, we are continuously working to improve our services.
              Please click below to try again.
            </p>
            <button
              id="error"
              className="btn btn-success try-again-button"
              onClick={redirectToCameraPage}
              style={{ margin: '15px 0px' }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Errorpage
