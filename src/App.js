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
      <form className="center-div" action="https://drive.google.com/file/d/1rXTRjirlGTF_4sujPDt4hOwnReZidnp1/view?usp=drivesdk">
          <button type="submit" value="downlod cv" className="downlod-cv">Downlod Resume</button>
      </form>
      <Social  />
      <TechComponent />
    </div>
  );
}

export default App;
