import "./App.css";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import Edit from "./components/Profile/Edit";
// import HeaderOne from "./components/SignInSide";
import SignInSide from "./components/SignInSide";
import Welcome from "./components/Welcome";
import SignUpSide from "./components/SignUpSide";
import Reports from "./components/Reports/Reports";
import IdeaStats from "./components/Reports/IdeaStats";

const sections = [
  { title: "Ideas", url: "home" },
  { title: "Guide", url: "#" },
  { title: "Coming Soon", url: "#" },
  { title: "Users", url: "#" },
  { title: "Reports", url: "reports" },
  { title: "Profile", url: "profile" },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="signin1" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="signup1" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="profile" element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="edit" element={<Edit />} />
        </Routes>
        <Routes>
          <Route path="signin" element={<SignInSide />} />
        </Routes>
        <Routes>
          <Route path="signup" element={<SignUpSide />} />
        </Routes>
        <Routes>
          <Route path="welcome" element={<Welcome />} />
        </Routes>
        <Routes>
          <Route path="reports" element={<Reports />} />
        </Routes>
        <Routes>
          <Route path="ideaStats" element={<IdeaStats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
