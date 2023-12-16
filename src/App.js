import { Route, Routes } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import Author from './pages/Author';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
