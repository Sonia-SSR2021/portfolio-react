import './App.css';
import PortfolioContainer from './PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopButton from './utilities/ScrollToTopButton';
import Footer from './PortfolioContainer/Footer/Footer';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
