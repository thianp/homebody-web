import './App.css';
import MyHelmet from './components/head/Helmet';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <>
    <MyHelmet/>
    <div className='body-container'>
    <HomePage/>
    </div>
    
    </>
  );
}

export default App;
