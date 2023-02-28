import './styles.scss';

export default function SelectPlan() {
  return (
    <div className="plan-container">
      <div className="plan-title">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>

      <div className="option-plans">
        <div className="arcade-plan">
          <label htmlFor="arcade">
            <svg />
            <p>Arcade</p>
            <span>$9/mo</span>
          </label>
        </div>

        <div className="advanced-plan">
          <label htmlFor="advanced">
            <svg />
            <p>Advanced</p>
            <span>$12/mo</span>
          </label>
        </div>

        <div className="pro-plan">
          <label htmlFor="pro">
            <svg />
            <p>Pro</p>
            <span>$15/mo</span>
          </label>
        </div>
      </div>

      <div className="month-year">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>

      <div className="back-next">
        <span>Go back</span>
        <button type="submit">Next Step</button>
      </div>
    </div>
  )
}