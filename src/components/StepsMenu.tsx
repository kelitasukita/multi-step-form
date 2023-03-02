import MenuItem from './MenuItem/MenuItem';
import PersonalInfo from './Steps/PersonalInfo/PersonalInfo';
import SelectPlan from './Steps/SelectPlan/SelectPlan';
import AddOns from './Steps/Add-ONS/Add-ons';
import Summary from './Steps/Summary/Summary';

import './StepsMenu.scss';
import Menu from './Menu/Menu';

export default function StepsMenu() {
  return (
    <div className="container">
      <div className="menu-box-container">
        <Menu />

        <div className="form-container">
          {/* <PersonalInfo /> */}
          {/* <SelectPlan /> */}
          {/* <AddOns /> */}
          <Summary />
        </div>
      </div>

    </div>
  );
}
