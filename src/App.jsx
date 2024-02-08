import './App.css';
import Header from './components/header'
import Asside from './components/nav/aside';
import MainBlock from './components/main-block';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Asside />
        <MainBlock />
      </div>
    </>
  );
}

export default App;
