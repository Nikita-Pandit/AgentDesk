

const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginController = async (req, res) => {
  const { email, password } = req.body
console.log(req.body);
  try {
    console.log("aaple apple")
    const admin = await Admin.findOne({ email })
    console.log("apple2 apple2")
    console.log("admin", admin)
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, admin.password)
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign(
      { 
user:{
  id: admin._id,
  email:admin.email
}
     }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    })

    res.json({ token })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = { loginController }
