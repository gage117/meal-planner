import NavBar from './components/NavBar';
import Main from './pages/Main';
import MenuContext from './utils/MenuContext';

function App() {
  return (
    <>
      <MenuContext.Provider >
        <NavBar />
        <Main />
      </MenuContext.Provider>
    </>
  );
}

export default App;
