import './styles.scss';

import Menu from "../../Menu/Menu";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import MobileMenu from '../../MobileMenu/MobileMenu';


export default function Finish() {
  const navigate = useNavigate();

  useEffect(() => {

    console.log('refresh: ' + localStorage.getItem('refresh'))

    if (localStorage.getItem('refresh')) {
      console.log('Vai apagar o refresh')

      localStorage.removeItem('refresh');
      navigate('/');

    } else {
      localStorage.setItem('refresh', 'banana');
      console.log('setou o refresh')
    }

  }, [])

  return (
    <>
      <MobileMenu />
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
    </>
  )
}