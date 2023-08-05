import "./home.css"
import logo from "./images/logo.png"
import logo1 from "./images/image1.png"
import {Link} from "react-router-dom";
export default function Secret()
{
  return(
    <div>
    <nav className="navbar">
    <img src={logo} alt="this is the log of the shop"/>
    <div className="nav-link">
      <Link to="/home/products" className="link"> PRODUCTS  </Link>
      <Link to="/login">LOGOUT</Link>
    </div>
    </nav>
    <div className="hero">
    <div className="header">
    <div className="text">
      <div className="text-1">
      <br/><br/><br/><br/>
        <h1>Welcome <br/>to Sports shop!</h1>
        <p>Find all your sports needs here</p>
        <a href="#" className="btn">Explore Now &#8594;</a>
      </div>
      <div className="text-1">
        <img src={logo1} alt=""/>
      </div>
    </div>
  </div>
</div>
{//<div className="football"><img src={logo}/></div>}
}
<div className="categaries">
  <div className="small">
    <div className="text">
      <div className="text-3">
        <img src="https://images.news18.com/ibnlive/uploads/2021/04/1618830508_roadlark_blue.jpg" alt=""/>
      </div>
      <div className="text-3">
        <img src="https://th.bing.com/th/id/OIP._0_rUZ3gMBMQV5EsA_IjrQHaE8?pid=ImgDet&rs=1" alt=""/>
      </div>
      <div className="text-3">
        <img src="https://th.bing.com/th?id=OIP.UYtuHOa6nifiZn2kuas_pQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt=""/>
      </div>
    </div>
  </div>
</div>
<div className="offer">
  <div className="img">


  <img src="https://th.bing.com/th?id=OIP.UYtuHOa6nifiZn2kuas_pQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt=""/>
</div>
<div className="offertext">
  <h1>Latest Cycle <img src="special-tag.png" width="50px;"/></h1>
  <p>If you wake up with a giant zit, you are really facing <br/>your fears when you look in the mirror</p>
  <a href="" className="btn">Click Here</a>
</div>
</div>
<br/>
<div className="latest">
<h1>Products</h1>
<div className="container-c">

<div className="image-div one">
  <img src="https://th.bing.com/th?id=OIP.UYtuHOa6nifiZn2kuas_pQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className="images0"/>
  <div className ="info-container">
    <h3>Name</h3>
    <h3>how are you this is the Description of product</h3>
    <button>Rs. 1000</button>
  </div>
</div>
<div className="image-div two">
  <img src="https://th.bing.com/th?id=OIP.UYtuHOa6nifiZn2kuas_pQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className="images0"/>
  <div className ="info-container">
    <h3>Name</h3>
    <h3>how are you this is the Description of product</h3>
    <button>Rs. 1000</button>
  </div>
</div>
<div className="image-div three">
  <img src="https://th.bing.com/th?id=OIP.UYtuHOa6nifiZn2kuas_pQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" className="images0"/>
  <div className="info-container">
    <h3>Name</h3>
    <h3>how are you this is the Description of product</h3>
    <button>Rs. 1000</button>
  </div>
</div>
</div>
</div>
<script src="./myScript.js"/>
<footer>
  <div className="contact">
    <h3>Contact</h3><br/>
    <p><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
</svg> Address:</b>If you wake up with a giant zit, you are really facing </p>
    <p><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-forward" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
</svg> Phone:</b>0000000000</p>
    <p><b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> Email-id:</b>xzz@gmail.com</p><br/>
    <br/><h4>Social Media</h4><br/>
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
  </div>
  <div className="contact0"><br/>
    <h3>Have a question?</h3><br/>
    <input type="text" placeholder="Name"/><br/>
    <input type="email" placeholder="Email-Id"/><br/>
    <textarea placeholder="Enter your questions here"></textarea><br/>
    <input type="submit" placeholder="Submit" className="btn0"/>
  </div>

</footer>
<center><div>&#169; 2023 All Rights Reserved.</div></center>
</div>
);
}
