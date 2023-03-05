import { Link } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import './styles.scss';

export default function AddOns() {
  return (
    <div className="box-container">
      <Menu />

      <div className="form-container">

        <div className="add-ons-container">
          <div className="add-ons-title">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
          </div>

          <div className="add-ons-options">
            <div className="option">
              <div className="checkmark">
                <input className='check' type="checkbox" />
                <label className='check-label' htmlFor="check">
                  {/* <div className="description"> */}
                  <strong>Online Service</strong>
                  <p>Access to multiplayer games</p>
                  {/* </div> */}
                </label>
              </div>
              <div className="price">
                <span>+$1/mo</span>
              </div>
            </div>

            <div className="option">
              <div className="checkmark">
                <input className='check' type="checkbox" />
                <label htmlFor="check">
                  <div className="description">
                    <strong>Larger storage</strong>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                </label>
              </div>
              <div className="price">
                <span>+$2/mo</span>
              </div>
            </div>

            <div className="option">
              <div className="checkmark">
                <input className='check' type="checkbox" />
                <label htmlFor="check">
                  <div className="description">
                    <strong>Customizable profile</strong>
                    <p>Custom theme on your profile</p>
                  </div>
                </label>
              </div>
              <div className="price">
                <span>+$2/mo</span>
              </div>
            </div>

            <div className="back-next">
              <Link to="/select-plan">
                <span>Go back</span>
              </Link>
              <button type="submit">Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}