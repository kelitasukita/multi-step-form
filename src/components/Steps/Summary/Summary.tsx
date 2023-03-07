import { Link, useNavigate } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import './styles.scss';

export default function Summary() {

  const formPlan = JSON.parse(localStorage.getItem('formPlan') ?? '{}');

  const selectedPlan = localStorage.getItem('selectedPlan') ?? 'arcade';

  const planPeriod = localStorage.getItem('planPeriod') ?? 'yearly';

  const selectedAddOns = JSON.parse(localStorage.getItem('selectedAddOns') ?? '{}');

  const yearlyOrMonth = () => {
    return planPeriod == 'yearly' ? '/yr' : '/mo'
  }

  const total = () => {
    const onlineCosts = selectedAddOns.online ? formPlan[planPeriod].addOns.online : 0;
    const largerCosts = selectedAddOns.larger ? formPlan[planPeriod].addOns.larger : 0;
    const customizableCosts = selectedAddOns.customizable ? formPlan[planPeriod].addOns.customizable : 0;

    const addOnCosts = onlineCosts + largerCosts + customizableCosts;
    const planCosts = formPlan[planPeriod].plans[selectedPlan];

    return planCosts + addOnCosts;
  }

  const navigate = useNavigate();

  const handleClickCleanStorage = () => {

    localStorage.removeItem('personalInfo');
    localStorage.removeItem('selectedAddOns');
    localStorage.removeItem('planPeriod');
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('formPlan');

  }

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
                    {yearlyOrMonth()}
                  </span>
                </div>
              </div>

              <div className="line" />

              <div className="selected-add-ons">
                {
                  <>
                    {
                      Object.entries(formPlan.addOns)
                        .map(([key, label]) => (
                          selectedAddOns[key] == true ?
                            <div className="add-ons-item">
                              <strong>{label}</strong>
                              <span>
                                +${formPlan[planPeriod].addOns[key]}
                                {yearlyOrMonth()}
                              </span>
                            </div> :
                            ''
                        ))
                    }
                  </>
                }
              </div>
            </div>

            <div className="total-price">
              <span>Total({planPeriod === 'yearly' ? 'per year' : 'per month'})</span>
              <strong>${total()}{yearlyOrMonth()}</strong>
            </div>

          </div>

          <div className="back-next summary-btn">
            <Link to="/add-ons">
              <span>Go back</span>
            </Link>
            <button type="submit" onClick={handleClickCleanStorage}>Confirm</button>
          </div>

        </div>
      </div >
    </div >
  )
}