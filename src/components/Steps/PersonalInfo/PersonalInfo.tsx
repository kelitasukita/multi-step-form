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

  const [personalInfo, setPersonalInfo] = useState({
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
    navigate('/select-plan');
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

          <div className="label-box">
            <div className="form-label">
              <label htmlFor="text">Name</label>
              <span className="error-message">This field is required</span>
            </div>
            <input type="text" placeholder='e.g. Stephen King' name="fullName" onChange={handleInputChange} />
          </div>

          <div className="label-box">
            <div className="form-label">
              <label htmlFor="email">Email Address</label>
              <span className="error-message">This field is required</span>
            </div>
            <input type="email" placeholder='e.g. stephenking@lorem.com' name="email" onChange={handleInputChange} />
          </div>

          <div className="label-box">
            <div className="form-label">
              <label htmlFor="tel">Phone Number</label>
              <span className="error-message">This field is required</span>
            </div>
            <input type="tel" placeholder='e.g. +1 234567 890' name="phoneNumber" onChange={handleInputChange} />
          </div>

          <button type="submit" onClick={handleButtonClick}>Next Step</button>

        </div>

      </div>

    </div>
  )
}