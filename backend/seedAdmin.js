
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
// const Admin = require('./models/Admin')
// require('dotenv').config()



// const createAdmin = async () => {
//   const email = 'admin@example.com'
//   const plainPassword = 'admin123'
//   const hashedPassword = await bcrypt.hash(plainPassword, 10)

//   const existing = await Admin.findOne({ email })
//   if (existing) {
//     console.log('⚠️ Admin already exists')
//     return mongoose.disconnect()
//   }

//   const admin = new Admin({ email, password: hashedPassword })
//   await admin.save()
//   console.log('✅ Admin created successfully!')
//   mongoose.disconnect()
// }

// createAdmin()
