import './App.css';
import Header from './Components/MainTitle/Header'
import TechComponent from './Components/Tecnologies/TechComponent'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="center-div">
          <button className="downlod-cv">Downlod CV</button>
      </div>
      
      <TechComponent />
    </div>
  );
}

export default App;
