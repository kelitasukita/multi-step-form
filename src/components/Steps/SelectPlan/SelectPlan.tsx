import Menu from '../../Menu/Menu';
import './styles.scss';

export default function SelectPlan() {
  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">

        <div className="plan-container">
          <div className="plan-title">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>

          <div className="option-plans">
            <div className="arcade-plan">
              <label htmlFor="arcade">
                <svg />
                <div className="price-period">
                  <p>Arcade</p>
                  <span>$9/mo</span>
                  <strong>2 months free</strong>
                </div>
              </label>
            </div>

            <div className="advanced-plan">
              <label htmlFor="advanced">
                <svg />
                <div className="plan-price">
                  <p>Advanced</p>
                  <span>$12/mo</span>
                </div>
              </label>
            </div>

            <div className="pro-plan">
              <label htmlFor="pro">
                <svg />
                <div className="plan-price">
                  <p>Pro</p>
                  <span>$15/mo</span>
                </div>
              </label>
            </div>
          </div>

          <div className="month-year">
            <div className="better-together">
              <span>Monthly</span>
              <label className="switch">
                <input type="checkbox" />
                <strong className="slider round" />
              </label>
              <span>Yearly</span>
            </div>
          </div>

          <div className="back-next">
            <span>Go back</span>
            <button type="submit">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}