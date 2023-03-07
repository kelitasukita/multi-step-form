import { Link } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import './styles.scss';

export default function Summary() {

  const formPlan = JSON.parse(localStorage.getItem('formPlan') ?? '{}');

  console.log(formPlan);

  const selectedPlan = localStorage.getItem('selectedPlan') ?? 'arcade';

  const planPeriod = localStorage.getItem('planPeriod') ?? 'yearly';

  const selectedAddOns = localStorage.getItem('selectedAddOns');

  console.log(selectedPlan);

  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">
        <div className="summary-container">
          <div className="summary-title">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
          </div>

          <div className="finish-container">
            <div className="selected-products">
              <div className="selected-plan">
                <div className="description-plan">
                  <strong>
                    {`${selectedPlan?.charAt(0).toUpperCase() + selectedPlan.slice(1)} 
                    (${planPeriod.charAt(0).toUpperCase() + planPeriod.slice(1)})`}
                  </strong>
                  <Link to="/select-plan">
                    <span>Change</span>
                  </Link>
                </div>
                <div className="plan-price">
                  <span>
                    ${formPlan[planPeriod].plans[selectedPlan]}
                    {planPeriod === 'yearly' ? '/yr' : '/mo'}
                  </span>
                </div>
              </div>

              <div className="line" />

              <div className="selected-add-ons">
                <div className="add-ons-item">
                  <strong>Online service</strong>
                  <span>+$1/mo</span>
                </div>

                <div className="add-ons-item">
                  <strong>Larger storage</strong>
                  <span>+$2/mo</span>
                </div>
              </div>
            </div>

            <div className="total-price">
              <span>Total(per month)</span>
              <strong>+$12/mo</strong>
            </div>

          </div>

          <div className="back-next summary-btn">
            <Link to="/add-ons">
              <span>Go back</span>
            </Link>
            <button type="submit">Confirm</button>
          </div>

        </div>
      </div>
    </div>
  )
}