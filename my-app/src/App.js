import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux';
import GamePage from './components/GamePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-[#4d4d4d] text-[#FFFFFF] p-[20px]">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/app" element={<GamePage />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
