import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import './styles.scss';

export default function AddOns() {

  const planPeriod = localStorage.getItem('planPeriod');

  const selectedAddOns = localStorage.getItem('selectedAddOns');

  const [addOns, setAddOns] = useState(
    selectedAddOns ? JSON.parse(selectedAddOns) : {
      online: false,
      larger: false,
      customizable: false,
    }
  );

  const navigate = useNavigate();

  const handleClickCheckbox = (addOn: string) => {

    let newValue = false;

    switch (addOn) {
      case 'online': newValue = !addOns.online; break;
      case 'larger': newValue = !addOns.larger; break;
      case 'customizable': newValue = !addOns.customizable; break;
    }

    const newAddOnState = { ...addOns, [addOn]: newValue };

    setAddOns(newAddOnState);
    localStorage.setItem('selectedAddOns', JSON.stringify(newAddOnState));
  }

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
            <div className="option" onClick={() => handleClickCheckbox('online')}>
              <div className="checkmark">
                <input className='check' type="checkbox" name='add-ons' value='online' checked={addOns.online} />
                <label htmlFor="check">
                  {/* <div className="description"> */}
                  <strong>Online Service</strong>
                  <p>Access to multiplayer games</p>
                  {/* </div> */}
                </label>
              </div>
              <div className="price">
                {planPeriod == 'monthly' ?
                  <span>+$1/mo</span>
                  :
                  <span>+$10/yr</span>
                }
              </div>
            </div>

            <div className="option" onClick={() => handleClickCheckbox('larger')}>
              <div className="checkmark">
                <input className='check' type="checkbox" name='add-ons' value='larger' checked={addOns.larger} />
                <label htmlFor="check">
                  <div className="description">
                    <strong>Larger storage</strong>
                    <p>Extra 1TB of cloud save</p>
                  </div>
                </label>
              </div>
              <div className="price">
                {planPeriod == 'monthly' ?
                  <span>+$2/mo</span>
                  :
                  <span>+$20/yr</span>
                }
              </div>
            </div>

            <div className="option" onClick={() => handleClickCheckbox('customizable')}>
              <div className="checkmark">
                <input className='check' type="checkbox" name='add-ons' value='customizable' checked={addOns.customizable} />
                <label htmlFor="check">
                  <div className="description">
                    <strong>Customizable profile</strong>
                    <p>Custom theme on your profile</p>
                  </div>
                </label>
              </div>
              <div className="price">
                {planPeriod == 'monthly' ?
                  <span>+$2/mo</span>
                  :
                  <span>+$20/yr</span>
                }
              </div>
            </div>

            <div className="back-next">
              <Link to="/select-plan">
                <span>Go back</span>
              </Link>
              <button type="submit" onClick={() => { navigate('/summary') }}>Next Step</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}