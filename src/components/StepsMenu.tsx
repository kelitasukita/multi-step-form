import MenuItem from './MenuItem';
import PersonalInfo from './Steps/PersonalInfo/index';
import SelectPlan from './Steps/SelectPlan';
import AddOns from './Steps/Add-ONS';
import Summary from './Steps/Summary';

import './StepsMenu.scss';

export default function StepsMenu() {
  return (
    <div className="container">
      <div className="menu-box-container">
        <div className="menu-box">
          <MenuItem stepNumberBall="1" stepNumberTitle="STEP 1" title="YOUR INFO" selected="" />
          <MenuItem stepNumberBall="2" stepNumberTitle="STEP 2" title="SELECT PLAN" selected="" />
          <MenuItem stepNumberBall="3" stepNumberTitle="STEP 3" title="ADD-ONS" selected="" />
          <MenuItem stepNumberBall="4" stepNumberTitle="STEP 4" title="SUMMARY" selected="selected" />
        </div>

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
