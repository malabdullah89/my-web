import './App.css';
import Header from './Components/MainTitle/Header'
import TechComponent from './Components/Tecnologies/TechComponent'
import Vector from './Components/Vector/Vector'
import Social from './Components/SocilaMedia/Social'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
       <Vector />
      <Header />
      <Contact />
      <div className="center-div">
          <button className="downlod-cv">Downlod CV</button>
      </div>
      <Social  />
      <TechComponent />
    </div>
  );
}

export default App;
