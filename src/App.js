import './App.scss';
import TurnersLogo from './Images/turners_car_logo.png';
//import SunAndTreeImage from './Images/sun_and_tree.png';
//import QuoteImage from './Images/quote.png';
import Header from './Components/Header';
import ButtonList from './Components/ButtonList';
import InfoSlide from './Components/InfoSlide';
import ShowReviews from './Components/Reviews';
import CoversList from './Components/CoversList';
import InformationList from './Components/InformationList';

function App() {
  return (
    <div className="App">
      <img className = "TurnersLogo" src={TurnersLogo} alt=""/>
      <Header />
      <div className = "Background">  
        <ButtonList />
      </div>
      <InfoSlide />
      <div className = "Reviews">
        <p className = "ReviewsHeaderText">What our customers are saying</p>
        <ShowReviews />
      </div>
      <div className = "CoversHeader">
        <p className = "CoversHeaderText">Not sure what cover you're after?</p>
        <p className = "CoversHeaderCompareText">Compare our different covers below!</p>
      </div>
      <div className = "CoversBackground">
        <CoversList />
        <div className = "PolicyText">
         <a className = "PolicyText" href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-car-everyday-plus-vcpcep-policy-book-062018-used26032021-current.pdf">*View our policy document</a>
        </div>
      </div>
      <div className = "CoversHeader"></div>
      <div className = "Information">
        <InformationList />
      </div>
    </div>
  );
}

export default App;
