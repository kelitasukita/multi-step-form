import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Routes";

function App() {

  const formPlan = {
    addOns: {
      online: 'Online service',
      larger: 'Larger storage',
      customizable: 'Customizable profile'
    },
    monthly: {
      plans: {
        arcade: 9,
        advanced: 12,
        pro: 15
      },

      addOns: {
        online: 1,
        larger: 2,
        customizable: 2
      }
    },
    yearly: {
      plans: {
        arcade: 90,
        advanced: 120,
        pro: 150
      },

      addOns: {
        online: 10,
        larger: 20,
        customizable: 20
      }
    }
  }

  localStorage.setItem('formPlan', JSON.stringify(formPlan));

  return (
    <RouterProvider router={router} />

  );
}

export default App;
