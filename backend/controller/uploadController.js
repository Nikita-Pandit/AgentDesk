
const Agent=require("../models/Agent")
const Record=require('../models/Record')
const path = require('path');
const uploadController=(req,res)=>{
      const file = req.file;

  if (!file) return res.status(400).json({ message: 'No file uploaded' });

  const ext = path.extname(file.originalname);
  if (!['.csv'].includes(ext)) {
    return res.status(400).json({ message: 'Invalid file format. Please upload a CSV file.' });
  }

  const results = [];

  fs.createReadStream(file.path)
    .pipe(csv())
    .on('data', (data) => {
      // Expect columns: FirstName, Phone, Notes
      results.push({
        firstName: data.FirstName,
        phone: data.Phone,
        notes: data.Notes,
      });
    })
    .on('end', async () => {
      try {
        const agents = await Agent.find();
        if (agents.length === 0) {
          return res.status(400).json({ message: 'No agents available for assignment.' });
        }

        const distributed = {};
        const recordDocs = [];

        results.forEach((record, index) => {
          const agentIndex = index % agents.length;
          const agentId = agents[agentIndex]._id;

          if (!distributed[agentId]) distributed[agentId] = [];

          const newRecord = new Record({ ...record, agentId });
          recordDocs.push(newRecord);
          distributed[agentId].push(newRecord);
        });

        await Record.insertMany(recordDocs);
        fs.unlinkSync(file.path); // clean temp file
        res.status(200).json({ message: 'File uploaded and data distributed among agents' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    });
}
module.exports={uploadController}