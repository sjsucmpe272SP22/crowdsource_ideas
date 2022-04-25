import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SignIn from './SignIn';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
