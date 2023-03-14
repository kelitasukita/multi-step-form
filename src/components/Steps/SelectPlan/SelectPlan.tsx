import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import MobileMenu from '../../MobileMenu/MobileMenu';
import './styles.scss';

export default function SelectPlan() {

  if (!localStorage.getItem('planPeriod') || !localStorage.getItem('selectedPlan')) {
    localStorage.setItem('planPeriod', 'monthly');
    localStorage.setItem('selectedPlan', 'arcade');
  }

  const [yearly, setYearly] = useState(localStorage.getItem('planPeriod') == 'yearly');
  const [plan, setPlan] = useState(localStorage.getItem('selectedPlan') ?? 'arcade');

  const navigate = useNavigate();

  const handlePlanPeriod = (planPeriod: Boolean) => {
    setYearly(prevValue => !!planPeriod);
    localStorage.setItem('planPeriod', planPeriod ? 'yearly' : 'monthly');
  }

  const handlePlan = (plan: string) => {
    setPlan(plan);

    localStorage.setItem('selectedPlan', plan);
  }

  return (

    <>
      <MobileMenu />
      <div className="box-container">
        <Menu />
        <div className="form-container">

          <div className="plan-container">
            <div className="plan-title">
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
            </div>

            <div className="option-plans">
              <div className={"arcade-plan "
                + (yearly ? ' yearly ' : '')
                + (plan == 'arcade' ? ' selected ' : '')}
                onClick={() => handlePlan('arcade')}>
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

              <div className={"advanced-plan "
                + (yearly ? 'yearly' : '')
                + (plan == 'advanced' ? ' selected ' : '')}
                onClick={() => handlePlan('advanced')}>
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

              <div className={"pro-plan "
                + (yearly ? 'yearly' : '')
                + (plan == 'pro' ? ' selected ' : '')}
                onClick={() => handlePlan('pro')}>
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
                <span
                  className={!yearly ? 'selected-period' : ''}
                  onClick={() => handlePlanPeriod(false)}>
                  Monthly
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    name='yearly'
                    onChange={(event) => handlePlanPeriod(event.target.checked)}
                    checked={yearly} />
                  <strong className="slider round" />
                </label>
                <span
                  className={yearly ? 'selected-period' : ''}
                  onClick={() => handlePlanPeriod(true)}>
                  Yearly
                </span>
              </div>
            </div>

            <div className="back-next">
              <Link to="/">
                <span>Go back</span>
              </Link>
              <button
                type="submit"
                onClick={() => { navigate('/add-ons') }}>Next Step
              </button>
            </div>
          </div>
        </div>
      </div >

      <footer className='back-next-responsive bg-footer'>
        <Link to="/">
          <span>Go back</span>
        </Link>
        <button
          className='responsive-btn'
          type="submit"
          onClick={() => { navigate('/add-ons') }}>Next Step
        </button>

      </footer>
    </>
  )
}