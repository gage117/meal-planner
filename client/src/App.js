import { useState } from 'react';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import MenuContext from './utils/MenuContext';

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <MenuContext.Provider >
        <NavBar setOpen={setOpen} open={open} />
        <Main setOpen={setOpen} open={open} />
      </MenuContext.Provider>
    </>
  );
}

export default App;
