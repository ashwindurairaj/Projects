import './App.css';
import "./Assets/Css/Banner.css"
import AboutUs from './Components/AboutUs';
import Banner from './Components/Banner';
import FoodGallery from './Components/FoodGallery';
import Moment from './Components/Momen';
import OurMenu from './Components/OurMenu';

function App() {
  return (
    <div className="italain">
      <Banner/>
      <AboutUs/>
      <FoodGallery/>
      <OurMenu/>
      <Moment/>
    </div>
  );
}

export default App;
