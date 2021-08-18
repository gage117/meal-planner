import { useState } from 'react';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import MealPlanContext from './utils/MealPlanContext';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <MealPlanContext.Provider >
        <NavBar setOpen={setOpen} open={open} />
        <Main setOpen={setOpen} open={open} />
      </MealPlanContext.Provider>
    </>
  );
}

export default App;
