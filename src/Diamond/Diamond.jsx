import './Diamond.css'
import diamond from '/public/assets/diamond/diamond1.png'
import fauxhawk from '/public/assets/diamond/fauxhawk.jpg'
import longslickback from '/public/assets/diamond/longslickback.jpg'
import sweepingfringe from '/public/assets/diamond/sweepingfringe.jpg'
import shortaffro from '/public/assets/diamond/shortaffro.jpg'

const Diamond = () => {
  return (
    <div style={{ marginTop: '68px' }}>
      <div className="jumbotron mt-3">
        <h1 className="display-4">Diamond Shape</h1>
      </div>
      <div className="diamond-container">
        <div className="diamond-top-cart">
          <div className="cart">
            <img src={diamond} alt="diamond1" />
          </div>
          <div className="cart text-cart">
            <p>Face highly angular and somewhat bony, widest at temples</p>
          </div>
        </div>
        <div className="diamond-bottom-carts">
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={fauxhawk} alt="fauxhawk" />
                <p>Fauxhawk</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={longslickback} alt="longslickback" />
                <p>Long Slick Back</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="cart">
                <img src={shortaffro} alt="shortaffro" />
                <p>Short Affro</p>
              </div>
            </div>
            <div className="col">
              <div className="cart">
                <img src={sweepingfringe} alt="sweepingfringe" />
                <p>Sweeping Fringe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diamond
