
import './styles.scss';
import MenuItem from '../MenuItem/MenuItem';
import { Link, useLocation } from 'react-router-dom';

export default function Menu() {
  const location = useLocation();
  return (
    <div className="menu-items">
      <Link to="/">
        <MenuItem
          stepNumberBall="1"
          stepNumberTitle="STEP 1"
          title="YOUR INFO"
          selected={location.pathname === '/'}
        />
      </Link>

      <Link to="/select-plan">
        <MenuItem
          stepNumberBall="2"
          stepNumberTitle="STEP 2"
          title="SELECT PLAN"
          selected={location.pathname === '/select-plan'}
        />
      </Link>

      <Link to="/add-ons">
        <MenuItem
          stepNumberBall="3"
          stepNumberTitle="STEP 3"
          title="ADD_ONS"
          selected={location.pathname === '/add-ons'}
        />
      </Link>

      <Link to="/summary">
        <MenuItem
          stepNumberBall="4"
          stepNumberTitle="STEP 4"
          title="SUMMARY"
          selected={location.pathname === '/summary'}
        />
      </Link>
    </div>
  )
}