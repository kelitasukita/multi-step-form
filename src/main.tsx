import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import MobileMenu from './components/MobileMenu/MobileMenu';
import AddOns from './components/Steps/Add-ONS/Add-ons';
import Finish from './components/Steps/Finish/Finish';
import PersonalInfo from './components/Steps/PersonalInfo/PersonalInfo';
import SelectPlan from './components/Steps/SelectPlan/SelectPlan';
import Summary from './components/Steps/Summary/Summary';

const formPlan = {
  addOns: {
    online: 'Online service',
    larger: 'Larger storage',
    customizable: 'Customizable profile',
  },
  monthly: {
    plans: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },

    addOns: {
      online: 1,
      larger: 2,
      customizable: 2,
    },
  },
  yearly: {
    plans: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },

    addOns: {
      online: 10,
      larger: 20,
      customizable: 20,
    },
  },
};

localStorage.setItem('formPlan', JSON.stringify(formPlan));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MobileMenu />
    <main className="box-container">
      <Menu />
      <section className="form-container">
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/select-plan" element={<SelectPlan />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/ordered" element={<Finish />} />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </section>
    </main>
  </BrowserRouter>
);
