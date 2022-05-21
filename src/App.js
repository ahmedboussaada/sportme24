import "./App.css";
import ControlledCarousel from "./slideshow/slideshow";
import Navbar from "./navbar/navbar";
// import {Row,Col} from 'react-bootstrap';
import Icon from "./icon/icon"
import Card from "./article/article";
// import Signup from "./login/signup";
// import Login from "./login/login";
import Footer from "./footer/footer";
import Video from "./video/video";
import Quiz from "./quiz/quiz";
import Articli from "./news/news";
// import {Route} from "react-router-dom";
import Weather from "./sidebar/sidebar";




function App() {


  return ( 
    

  <div className="containere">
      <div className="nav"><Navbar/></div>
      <div className="quiz"><Quiz/></div>      
      <div className="slideshow"><ControlledCarousel/></div>
      <div className="icons"><Icon/></div>
      <div className="tnligue"> 
        <Articli/>
        </div>
      <div className="blog"><Card/></div>
      <div className="pub">pub</div>
      <div className="videos"><Video/></div>
      <div className="sidebar"><Weather/> </div>
      <div className="footer"><div className="ico"><Icon/> </div>
      <div><Footer/></div> </div>
  </div>
  );
}

export default App;
