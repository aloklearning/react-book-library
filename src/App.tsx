import './App.css';
import { useSelector } from 'react-redux';

import Header from './Components/Header';
import Loader from './Components/Loader';
import usefetchBooksURL from './Helpers/getBooksURL';
import { InitialBookState } from './Redux/initialStateInterface';

const App = () => {
  const getURLBooks = usefetchBooksURL({});
  const booksData = useSelector<InitialBookState, Object>(state => state.books);

  return (
    <div className="App">
      <Header />
      {getURLBooks.isLoading ? 
      <Loader /> : <></>}
    </div>
  );
}

export default App;
