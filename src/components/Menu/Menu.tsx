
import './styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useLocation } from 'react-router-dom';

export default function Menu() {
  const location = useLocation();
  return (
    <div className="menu-items">

      <MenuItem
        stepNumberBall="1"
        stepNumberTitle="STEP 1"
        title="YOUR INFO"
        selected={location.pathname === '/'}
      />

      <MenuItem
        stepNumberBall="2"
        stepNumberTitle="STEP 2"
        title="SELECT PLAN"
        selected={location.pathname === '/select-plan'}
      />

      <MenuItem
        stepNumberBall="3"
        stepNumberTitle="STEP 3"
        title="ADD-ONS"
        selected={location.pathname === '/add-ons'}
      />

      <MenuItem
        stepNumberBall="4"
        stepNumberTitle="STEP 4"
        title="SUMMARY"
        selected={location.pathname === '/summary'}
      />
    </div>
  )
}