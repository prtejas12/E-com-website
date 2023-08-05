const {login}=require("../controlers/AuthControllers")
const {register}=require("../controlers/AuthControllers")
const router=require("express").Router()
router.post("/register",register)
router.post("/login",login)
module.exports=router
