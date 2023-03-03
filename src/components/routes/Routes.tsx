import {
  createBrowserRouter,
} from "react-router-dom";

import PersonalInfo from "../Steps/PersonalInfo/PersonalInfo";
import SelectPlan from "../Steps/SelectPlan/SelectPlan";
import AddOns from "../Steps/Add-ONS/Add-ons";
import Summary from "../Steps/Summary/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonalInfo />
  },
  {
    path: "/select-plan",
    element: <SelectPlan />
  },
  {
    path: "/add-ons",
    element: <AddOns />
  },
  {
    path: "/summary",
    element: <Summary />
  }
])

export default router;