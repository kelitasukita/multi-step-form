import './styles.scss';

import Menu from "../../Menu/Menu";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Finish() {
  const navigate = useNavigate();

  useEffect(() => {

    if (localStorage.getItem('refresh')) {

      localStorage.removeItem('refresh');
      navigate('/');

    } else {
      localStorage.setItem('refresh', 'refresh');
    }

  }, [])

  return (
    <div className="box-container">
      <Menu />
      <div className="form-container">
        <div className="thanks-box">
          <svg />
          <span>Thank you!</span>
          <p>Thanks for confirming your subscription!
            We hope you have fun using our platform.
            If you ever need support, please feel free to email us at
            support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  )
}