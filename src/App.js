import './App.scss';
import TurnersLogo from "./Images/turners_car_logo_small.png"
import Header from './Components/Header';
import ButtonList from './Components/ButtonList';

function App() {
  return (
    <div className="App">
      <img className = "TurnersLogo" src={TurnersLogo} alt=""/>
      <Header />
      <div className = "Background">
        <ButtonList />
      </div>
    </div>
  );
}

export default App;
