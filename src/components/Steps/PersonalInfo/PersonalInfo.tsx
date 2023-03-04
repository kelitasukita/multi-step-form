import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../Menu/Menu';
import './styles.scss';

interface PersonalInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export default function personalInfo() {

  // States:
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("personalInfo");
    if (storedData) {
      setPersonalInfo(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPersonalInfo({ ...personalInfo, [name]: value });
    localStorage.setItem("personalInfo", JSON.stringify({ ...personalInfo, [name]: value }))
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {

    if (!personalInfo.fullName || !personalInfo.phoneNumber || !personalInfo.email) {
      setErrors({
        fullName: !personalInfo.fullName ? 'This field is required!' : '',
        email: !personalInfo.email ? 'This field is required!' : '',
        phoneNumber: !personalInfo.phoneNumber ? 'This field is required!' : '',
      });
    } else {
      setErrors({
        fullName: "",
        email: "",
        phoneNumber: "",
      });

      navigate('/select-plan');
    }
  }

  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">
        <div className="personalInfo-container">
          <div className="title-info">
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>

          <div className={"label-box " + (errors.fullName ? 'error' : '')}>
            <div className="form-label">
              <label htmlFor="text">Name</label>
              <span className="error-message">{errors.fullName}</span>
            </div>
            <input type="text" placeholder='e.g. Stephen King' name="fullName" value={personalInfo.fullName} onChange={handleInputChange} />
          </div>

          <div className={"label-box " + (errors.email ? 'error' : '')}>
            <div className="form-label">
              <label htmlFor="email">Email Address</label>
              <span className="error-message">{errors.email}</span>
            </div>
            <input type="email" placeholder='e.g. stephenking@lorem.com' name="email" value={personalInfo.email} onChange={handleInputChange} />
          </div>

          <div className={"label-box " + (errors.phoneNumber ? 'error' : '')}>
            <div className="form-label">
              <label htmlFor="tel">Phone Number</label>
              <span className="error-message">{errors.phoneNumber}</span>
            </div>
            <input type="tel" placeholder='e.g. +1 234567 890' name="phoneNumber" value={personalInfo.phoneNumber} onChange={handleInputChange} />
          </div>

          <button type="submit" onClick={handleButtonClick}>Next Step</button>

        </div>

      </div>

    </div>
  )
}