import './styles.scss';
import MenuItem from '../MenuItem/MenuItem';

export default function Menu() {
  return (
    <div className="menu-items">
      <MenuItem stepNumberBall="1" stepNumberTitle="STEP 1" title="YOUR INFO" selected="" />
      <MenuItem stepNumberBall="2" stepNumberTitle="STEP 2" title="SELECT PLAN" selected="" />
      <MenuItem stepNumberBall="3" stepNumberTitle="STEP 3" title="ADD_ONS" selected="" />
      <MenuItem stepNumberBall="4" stepNumberTitle="STEP 4" title="SUMMARY" selected="" />
    </div>
  )
}