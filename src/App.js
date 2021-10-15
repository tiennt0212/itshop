import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <HelmetProvider>
      <Routes></Routes>
    </HelmetProvider>
  );
}

export default App;
