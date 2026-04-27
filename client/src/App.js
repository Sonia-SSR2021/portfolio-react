import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from './utilities/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />

      <ScrollToTopButton />
    </div>
  );
}

export default App;
