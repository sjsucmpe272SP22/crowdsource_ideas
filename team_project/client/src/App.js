import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signin" element={<SignIn />} />
      </Routes>
      <Routes>
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
