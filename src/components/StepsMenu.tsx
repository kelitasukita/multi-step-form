import MenuItem from './MenuItem/index';

import './StepsMenu.scss';

export default function StepsMenu() {
  return(
    <div className="container">
      <div className="container-box">
        <div className="menu-box">
          <MenuItem stepNumberBall="1" stepNumberTitle="STEP 1" title="YOUR INFO" />
          <MenuItem stepNumberBall="2" stepNumberTitle="STEP 2" title="SELECT PLAN"/>
          <MenuItem stepNumberBall="3" stepNumberTitle="STEP 3" title="ADD-ONS"/>
          <MenuItem stepNumberBall="4" stepNumberTitle="STEP 4" title="SUMMARY"/>
        </div>
      </div>
    </div>
  )
}