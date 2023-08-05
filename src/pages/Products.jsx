import logo from "./images/p31.jpeg"
import logo0 from "./images/logo.png"
import './Cards.css'
import Cards from "./Cards"
import gifts from "./gifts.js"
import toys from "./toys.js"
import {Link} from "react-router-dom"
function App(prop) {
  const giftElement=gifts.map(gift=>{
   return <Cards
    h1={gift.title}
    desc={gift.desc}
    price={gift.price}/>
  })
  const toyElements=toys.map(toy=>{
    return <Cards
     h1={toy.title}
     desc={toy.desc}
     price={toy.price}/>
  })
  return (
    <div>
    <nav className="nav-logo">
    <img src={logo0} alt="this is the img" className="logo-nav"/>
    <Link to="/home" className="link">HOME</Link>
    </nav>
    <a href="#nav0" className="b">&#8593;</a>
    <br/><br/><br id="nav0"/><br/>
    <div className="product-nav" id="nav">
    <a href="#toys">Toys</a>
    <a href="#cycles">Cycles</a>
    <a href="#gifts">Gifts</a>
    <a href="#sports">Sports</a>
    </div>
    <br/>
    <div  id="toys">
    <br/>
    <h1 className="h1">Toys &#8594;</h1>
    <div className="App" id="toys">
    {toyElements}
    </div>
    </div>
    <div id="cycles">
    <br/><br/>
    <h1 className="h1">Cycles &#8594;</h1>
    <div className="App" id="cycles">
    {toyElements}
    </div>
    </div>
    <div id="gifts">
    <br/><br/><br/>
    <h1 className="h1">Gifts &#8594;</h1>
    <div className="App" id="gifts">
    {giftElement}
    </div>
    </div>
    <div id="sports">
    <h1 className="h1">Sports &#8594;</h1>
    <div className="App">
    </div>
    </div>
    </div>
  );
}

export default App;
