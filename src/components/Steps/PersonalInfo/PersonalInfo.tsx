import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';

import Menu from '../../Menu/Menu';
import MobileMenu from '../../MobileMenu/MobileMenu';
import './styles.scss';

interface PersonalInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
}

interface ValidationError {
  inner: {
    path: string;
    message: string;
  }[];
}

export default function personalInfo() {
  // States:
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem('personalInfo');
    if (storedData) {
      setPersonalInfo(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPersonalInfo({ ...personalInfo, [name]: value });
    localStorage.setItem('personalInfo', JSON.stringify({ ...personalInfo, [name]: value }));
  };

  const navigate = useNavigate();

  const telefoneRegex = /^(\d{0,2})\s*(\d{4})\s*(\d{4})$/;
  const schema = Yup.object().shape({
    fullName: Yup.string().required('This field is required!').trim(),
    email: Yup.string().required('This field is required!').email().trim(),
    phoneNumber: Yup.string().matches(telefoneRegex, 'Invalid phone number').required('This field is required').min(8, 'Must be at least 8 characters').trim()
  });

  const handleButtonClick = async () => {
    try {
      await schema.validate(personalInfo, {
        abortEarly: false,
      })

      navigate('/select-plan');
    } catch (err) {

      const currentErrors = {
        fullName: '',
        email: '',
        phoneNumber: '',
      };

      (err as ValidationError).inner.forEach((e) => {

        switch (e.path) {
          case 'fullName': currentErrors.fullName += ' ' + e.message; break;
          case 'email': currentErrors.email += ' ' + e.message; break;
          case 'phoneNumber': currentErrors.phoneNumber += ' ' + e.message; break;
        }

      });

      setErrors(currentErrors)
    }
  }

  return (
    <>
      <MobileMenu />
      <div className="box-container">
        <Menu />
        <div className="form-container">
          <div className="personalInfo-container">
            <div className="title-info">
              <h1>Personal Info</h1>
              <p>Please provide your name, email address, and phone number.</p>
            </div>

            <div className={`label-box ${errors.fullName ? 'error' : ''}`}>
              <div className="form-label">
                <label htmlFor="fullName">Name</label>
                <span className="error-message">{errors.fullName}</span>
              </div>
              <input
                className='fullName'
                type="text"
                placeholder="e.g. Stephen King"
                name="fullName"
                autoComplete='off'
                value={personalInfo.fullName}
                onChange={handleInputChange} />
            </div>

            <div className={`label-box ${errors.email ? 'error' : ''}`}>
              <div className="form-label">
                <label htmlFor="email">Email Address</label>
                <span className="error-message">{errors.email}</span>
              </div>
              <input
                className='email'
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                name="email"
                autoComplete='off'
                value={personalInfo.email}
                onChange={handleInputChange} />
            </div>

            <div className={`label-box ${errors.phoneNumber ? 'error' : ''}`}>
              <div className="form-label">
                <label htmlFor="phoneNumber">Phone Number</label>
                <span className="error-message">{errors.phoneNumber}</span>
              </div>
              <input
                className='phoneNumber'
                type="tel"
                pattern="[0-9]{2}-[0-9]{8}"
                placeholder="e.g. 06 1234 5678"
                name="phoneNumber"
                autoComplete='off'
                value={personalInfo.phoneNumber}
                onChange={handleInputChange} />
            </div>

            <button
              className="desktop-btn"
              type="submit"
              onClick={handleButtonClick}>Next Step
            </button>
          </div>

        </div>


      </div>

      <footer className='bg-footer'>
        <button
          className='responsive-btn'
          type="submit"
          onClick={handleButtonClick}>Next Step
        </button>

      </footer>
    </>
  );
}
