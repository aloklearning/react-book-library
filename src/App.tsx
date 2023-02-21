import './App.css';

import Header from './Components/Header';
import { GetBooks } from './Helpers/GetBooks';

const App = () => {
  const getBooks = GetBooks({});
  
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
