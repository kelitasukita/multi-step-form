import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import PersonalInfo from "../Steps/PersonalInfo/PersonalInfo";
import SelectPlan from "../Steps/SelectPlan/SelectPlan";
import AddOns from "../Steps/Add-ONS/Add-ons";
import Summary from "../Steps/Summary/Summary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PersonalInfo />}>
      <Route path="/select-plan" element={<SelectPlan />} />
      <Route path="/add-ons" element={<AddOns />} />
      <Route path="/summary" element={<Summary />} />
    </Route>
  )
)

export default router;