import { Route, Routes } from 'react-router';
import './App.css';
import Navigation from './components/Navigation';
import Author from './pages/Author';
import HelpPage from './pages/HelpPage';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter basename="/fast-rename-web">
      <Routes>
        <Route path="/fast-rename-web/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
