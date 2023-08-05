import React,{useState} from "react"
import {Link,useNavigate} from "react-router-dom"
import {ToastContainer,toast} from "react-toastify"
import axios from "axios"
import lgog from "./images/best-ai-photo-software-sports-shop-with-cycles-and-sports-items-for-one-ghzkcc.png"
import log from "./images/logo.png"
import "./login.css"
function Register() {
  const [value,setValue]=useState({
    email:"",
    password:""
  })
  const generateError=(err)=>{
    alert("Error: "+err)
  }
    const navigate=useNavigate("")
  // const [password,setPassword]=useState("")
  // const [repassword,setRepassword]=useState("")
  const handelSubmit=async (e)=>{
    e.preventDefault()
    try{
      const{data} =await axios.post("http://localhost:4000/register",{
        ...value,
      },{withCredentials:true})
      if(data){
        if(data.error){
          const{email,password}=data.error
          if(email) generateError(email)
          else if(password) generateError(password)
          else{

          }
        }
        else{
            navigate("/home")
        }
      }
    }catch(err)
    {
    }
  }

  return (
    <div className="main">
    <div className="grid">
    <img src={lgog}/>
    </div>
    <div className="background">
    <img src={log}/>
    <div className="container">
    <h1>Register</h1>
    <form onSubmit={(e)=>handelSubmit(e)}>
    <input type="email" name="email" placeholder="Enter Email" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/><br/>
    <input type="password" name="password" placeholder="Password" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/><br/>
    <br/>
    <button type="submit">Submit</button>
    </form>
    <span>Already have an account? <Link to="/login">click</Link></span>
    </div>
    </div>
    </div>

  );
}

export default Register;
