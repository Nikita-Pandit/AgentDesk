const Agent = require('../models/Agent')
const createAgent=async (req,res)=>{
    try {
    const { name, email, mobile, password } = req.body

    const agentExists = await Agent.findOne({ email })
    if (agentExists) return res.status(400).json({ message: 'Agent already exists' })

    const newAgent = new Agent({ name, email, mobile, password })
    await newAgent.save()

    res.status(201).json({ message: 'Agent added successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error creating agent', error: error.message })
  }
}

const getAgent=async(req,res)=>{
  try {
    const agents = await Agent.find()
    res.status(200).json(agents)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching agents' })
  }
}
module.exports={createAgent, getAgent}