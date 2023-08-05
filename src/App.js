import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Secret from "./pages/Secret"
import Products from "./pages/Products"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Register/>}/>
    <Route path="/home" element={<Secret/>}/>
    <Route path="/home/products" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
