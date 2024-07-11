import './Round.css'
import round from '/public/assets/round/round1.png'
import longfrenchcrop from '/public/assets/round/longfrenchcrop.jpg'
import theangularfringe from '/public/assets/round/theangularfringe.jpg'
import thequif from '/public/assets/round/thequif.jpg'
import thesidepart from '/public/assets/round/thesidepart.jpg'

const Round = () => {
  return (
    <div style={{ marginTop: '68px' }}>
      {' '}
      <div className="jumbotron mt-3">
        <h1 className="display-4">Round Shape</h1>
      </div>
      <div className="round-container">
        <div className="round-top-cart">
          <div className="cart">
            <img src={round} alt="round1" />
          </div>
          <div className="cart text-cart">
            <p>Face width and length almost the same.Widest at cheeks.</p>
          </div>
        </div>
        <div className="round-bottom-carts">
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={longfrenchcrop} alt="longfrenchcrop" />
                <p>Long French Crop</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={theangularfringe} alt="theangularfringe" />
                <p>The Angular Fringe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={thequif} alt="thequif" />
                <p>The Quif</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={thesidepart} alt="thesidepart" />
                <p>The Side Part</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Round
