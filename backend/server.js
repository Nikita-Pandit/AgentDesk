const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const Admin = require('./models/Admin')
const Agent=require("./models/Agent")
const app = express()

app.use(cors())
app.use(express.json())

 const loginRoutes=require("./routes/loginRoutes")
 const uploadRoutes=require("./routes/uploadRoutes")
const agentRoutes=require("./routes/agentRoutes")
// const agentRoutes = require('./routes/agentRoutes')
// app.use('/api/agents', agentRoutes)
const authMiddleware=require("./middlewares/authMiddleware")

const {Record}=require("./models/Record")

app.use("/api",loginRoutes)
app.use("/api",uploadRoutes)
app.use("/api",agentRoutes)


// @route GET /api/records-by-agent
app.get('/api/records-by-agent', authMiddleware, async (req, res) => {
  try {
    const agents = await Agent.find();
    const records = await Record.find();

    const grouped = {};

    agents.forEach(agent => {
      grouped[agent.name] = records
        .filter(record => record.agentId.toString() === agent._id.toString())
        .map(r => ({
          firstName: r.firstName,
          phone: r.phone,
          notes: r.notes,
        }));
    });

    res.json(grouped);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching records' });
  }
});

// mongoose.connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log('MongoDB Connected')
//     app.listen(5000, () => console.log(`Server started on port ${process.env.PORT}`))
//   })
//   .catch(err => console.error(err))


mongoose.connect(process.env.MONGO_URL)
  .then(async () => {
    console.log('✅ MongoDB Connected')

    // Create admin only after DB is connected
    await createAdmin()

    app.listen(5000, () =>
      console.log(`🚀 Server started on port ${process.env.PORT || 5000}`)
    )
  })
  .catch(err => console.error(err))




// const createAdmin = async () => {
//   const email = 'miya@example.com'
//   const plainPassword = 'miya123'
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


const createAdmin = async () => {
  const email = 'admin@example.com'
  const plainPassword = 'admin123'

  console.log('🔐 Creating admin...')
  const hashedPassword = await bcrypt.hash(plainPassword, 10)

  const existing = await Admin.findOne({ email })
  if (existing) {
    console.log('⚠️ Admin already exists')
    return
  }

  const admin = new Admin({ email, password: hashedPassword })
  await admin.save()
  console.log('✅ Admin created successfully!')
}





