import './styles.scss';

import Menu from "../../Menu/Menu";


export default function Thanks() {
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