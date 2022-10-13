import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Search from './components/Search';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Search />
        <Posts />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
