import logo from './logo.svg';
import './App.css';
import './Component/layout.css'
import Aside from './Component/aside.js';
import Main from './Component/Main.js';
import Reference from './Component/Reference.js';


function App() {
  return (
    <div className="App">
      <Aside />
      <Main />
      <Reference />
    </div>
  );
}

export default App;
