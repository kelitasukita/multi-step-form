import "./styles.scss";

import { useLocation } from 'react-router-dom';

import MenuItem from "../MenuItem/MenuItem";

import mobileSvg from "../../assets/images/bg-sidebar-mobile.svg";

export default function MobileMenu() {
  const location = useLocation();
  return (
    <>
      <div className="mobile-menu-bg-image">
        <img src={mobileSvg} alt="" />
      </div>

      <div className="mobile-menu-step-ball">
        <MenuItem
          stepNumberBall="1"
          selected={location.pathname === '/'}
        />
        <MenuItem
          stepNumberBall="2"
          selected={location.pathname === '/select-plan'}
        />
        <MenuItem
          stepNumberBall="3"
          selected={location.pathname === '/add-ons'}
        />
        <MenuItem
          stepNumberBall="4"
          selected={location.pathname === '/summary'}
        />
      </div>

    </>

  )

}