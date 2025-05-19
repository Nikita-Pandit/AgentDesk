const express=require("express")
const router=express.Router()
const {createAgent, getAgent}=require("../controller/agentController")
router.post("/agents", createAgent)
router.get("/agents",getAgent)
module.exports=router