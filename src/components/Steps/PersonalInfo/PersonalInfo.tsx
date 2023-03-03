import Menu from '../../Menu/Menu';
import './styles.scss';

export default function personalInfo() {
  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">
        <div className="personalInfo-container">
          <div className="title-info">
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>

          <div className="label-box">
            <label htmlFor="text">Name</label>
            <span className="error-message">This field is required</span>
            <input type="text" placeholder='e.g. Stephen King' />
          </div>

          <div className="label-box">
            <label htmlFor="email">Email Address</label>
            <span className="error-message">This field is required</span>
            <input type="email" placeholder='e.g. stephenking@lorem.com' />
          </div>

          <div className="label-box error">
            <div className="form-label">
              <label htmlFor="tel">Phone Number</label>
              <span className="error-message">This field is required</span>
            </div>
            <input type="tel" placeholder='e.g. +1 234567 890' />
          </div>

          <button type="submit">Next Step</button>

        </div>

      </div>

    </div>
  )
}