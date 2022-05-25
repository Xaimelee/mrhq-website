import './App.scss';
import TurnersLogo from './Images/turners_car_logo.png';
//import SunAndTreeImage from './Images/sun_and_tree.png';
import QuoteImage from './Images/quote.png';
import Header from './Components/Header';
import ButtonList from './Components/ButtonList';
import InfoSlide from './Components/InfoSlide';
import ShowReviews from './Components/Reviews';

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
      <div className = "Reviews">
        <p className = "ReviewsHeaderText">What our customers are saying</p>
        <img className = "QuoteImage" src={QuoteImage} alt=""/>
        <ShowReviews />
      </div>
    </div>
  );
}

export default App;
