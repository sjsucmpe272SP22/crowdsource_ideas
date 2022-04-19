import logo from './logo.svg';
import './App.css';
import './navbar.css'

function App() {
  return (
    <div className="App">
      <ul id='navbar'>
        <li><a class="active" href="#ideas">Ideas</a></li>
        <li><a href="#guide">Guide</a></li>
        <li><a href="#soon">Coming Soon</a></li>
        <li><a href="#announces">Annoucements</a></li>
        <li style={{float: 'right'}}><a href="#profile">Profile</a></li>
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// // Get the container element
// var navbar = document.getElementById("navbar");
// // Get all buttons inside the container
// var btns = navbar.getElementsByTagName("li");
// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current.classList.remove('active')
//     this.className += "active";
//   });
// }

export default App;
