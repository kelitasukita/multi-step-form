import { useState } from 'react';
import Menu from '../../Menu/Menu';
import './styles.scss';

export default function SelectPlan() {

  const [yearly, setYearly] = useState(false);

  const handlePlanPeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setYearly(checked);
  }

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
            <div className={"arcade-plan " + (yearly ? 'yearly' : '')}>
              <label htmlFor="arcade">
                <svg />
                <div className="plan-price">
                  <p>Arcade</p>
                  {yearly ?
                    <>
                      <span>$90/yr</span>
                      <strong>2 months free</strong>
                    </>
                    :
                    <span>$9/mo</span>
                  }

                </div>
              </label>
            </div>

            <div className={"advanced-plan " + (yearly ? 'yearly' : '')}>
              <label htmlFor="advanced">
                <svg />
                <div className="plan-price">
                  <p>Advanced</p>
                  {yearly ?
                    <>
                      <span>$120/yr</span>
                      <strong>2 months free</strong>
                    </>
                    :
                    <span>$12/mo</span>
                  }
                </div>
              </label>
            </div>

            <div className={"pro-plan " + (yearly ? 'yearly' : '')}>
              <label htmlFor="pro">
                <svg />
                <div className="plan-price">
                  <p>Pro</p>
                  {yearly ?
                    <>
                      <span>$150/yr</span>
                      <strong>2 months free</strong>
                    </>
                    :
                    <span>$15/mo</span>
                  }
                </div>
              </label>
            </div>
          </div>

          <div className={"month-year " + (yearly ? 'yearly' : '')}>
            <div className="better-together">
              <span className={!yearly ? 'selected' : ''}>Monthly</span>
              <label className="switch">
                <input type="checkbox" name='yearly' onChange={handlePlanPeriod} />
                <strong className="slider round" />
              </label>
              <span className={yearly ? 'selected' : ''}>Yearly</span>
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