import './App.css';
import { useSelector } from 'react-redux';

import Header from './Components/Header';
import Loader from './Components/Loader';
import BooksCard from './Components/BooksCard';
import usefetchBooksURL from './Helpers/getBooksURL';
import { InitialBookState } from './Redux/initialStateInterface';

const App = () => {
  const getURLBooks = usefetchBooksURL({});
  const booksData = useSelector<InitialBookState, Object>(state => state.books);

  return (
    <div className="App">
      <Header />
      {getURLBooks.isLoading ? 
      <Loader /> : <BooksCard />}
    </div>
  );
}

export default App;
