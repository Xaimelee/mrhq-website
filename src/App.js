import './App.scss';
import TurnersLogo from "./Images/turners_car_logo.png"
import Header from './Components/Header';
import ButtonList from './Components/ButtonList';
import InfoSlide from './Components/InfoSlide';

function App() {
  return (
    <div className="App">
      <img className = "TurnersLogo" src={TurnersLogo} alt=""/>
      <Header />
      <div className = "Background">
        <ButtonList />
        <p className = "BackgroundTextMain">NZ's most trusted used vehicle dealership</p>
        <p className = "BackgroundTextSecondary">As voted by Reader's Digest Most Trusted Brand Award</p>
      </div>
      <InfoSlide />
    </div>
  );
}

export default App;
