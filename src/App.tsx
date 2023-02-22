import './App.css';
import Header from './Components/Header';
import HomePage from './Components/Home/HomePage';
import WelcomePage from './Components/Welcome/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
