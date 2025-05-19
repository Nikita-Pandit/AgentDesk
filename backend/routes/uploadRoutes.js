// const express=require("express")
// const router=express.Router()
// const multer = require('multer');
// const csv = require('csv-parser');
// const fs = require('fs');
// const path = require('path');
// const upload = multer({ dest: 'uploads/' });
// const {uploadController}=require("../controller/uploadController")
// router.post("/upload",upload.single('file'), uploadController)

// module.exports=router













// const express = require('express');
// const multer = require('multer');
// const csv = require('csv-parser');
// const fs = require('fs');
// const path = require('path');
// const  Agent  = require('../models/Agent');
// const {Record} = require('../models/Record');
// // const authMiddleware = require('../middleware/auth');

// const router = express.Router();

// // Multer config
// const upload = multer({ dest: 'uploads/' });

// // @route POST /api/upload
// router.post('/upload', upload.single('file'), async (req, res) => {

//   const file = req.file;
// console.log("file", file)
//   if (!file) return res.status(400).json({ message: 'No file uploaded' });

//   const ext = path.extname(file.originalname);
//   // if (!['.csv'].includes(ext)) {
//   //   return res.status(400).json({ message: 'Invalid file format. Please upload a CSV file.' });
//   // }
//   if (!['.csv', '.xlsx', '.xls'].includes(ext)) {
//   return res.status(400).json({ message: 'Invalid file format. Please upload a CSV or Excel file.' });
// }


//   const results = [];

//   fs.createReadStream(file.path)
//     .pipe(csv())
//     .on('data', (data) => {
//       // Expect columns: FirstName, Phone, Notes
//       results.push({
//         firstName: data.FirstName,
//         phone: data.Phone,
//         notes: data.Notes,
//       });
//     })
//     .on('end', async () => {
//       try {
//         const agents = await Agent.find();
//         console.log("agents", agents)
//         if (agents.length === 0) {
//           return res.status(400).json({ message: 'No agents available for assignment.' });
//         }

//         const distributed = {};
//         const recordDocs = [];

//         results.forEach((record, index) => {
//           const agentIndex = index % agents.length;
//           const agentId = agents[agentIndex]._id;

//           if (!distributed[agentId]) distributed[agentId] = [];

//           const newRecord = new Record({ ...record, agentId });
//           recordDocs.push(newRecord);
//           distributed[agentId].push(newRecord);
//         });

//         await Record.insertMany(recordDocs);
//         fs.unlinkSync(file.path); // clean temp file
//         res.status(200).json({ message: 'File uploaded and data distributed among agents' });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Something went wrong' });
//       }
//     });
// });

// module.exports = router;





const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');
const Agent = require('../models/Agent');
const { Record } = require('../models/Record');
const authMiddleware=require("../middlewares/authMiddleware")
const router = express.Router();

// Multer config
const upload = multer({ dest: 'uploads/' });

// @route POST /api/upload
router.post('/upload', authMiddleware ,upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No file uploaded' });

  const ext = path.extname(file.originalname).toLowerCase();
  if (!['.csv', '.xlsx', '.xls'].includes(ext)) {
    fs.unlinkSync(file.path); // Delete invalid file
    return res.status(400).json({ message: 'Invalid file format. Please upload a CSV or Excel file.' });
  }

  let results = [];
console.log("apple3 apple3")
  try {
    if (ext === '.csv') {
      // Parse CSV
      const stream = fs.createReadStream(file.path).pipe(csv());
      for await (const data of stream) {
        results.push({
          firstName: data.FirstName,
          phone: data.Phone,
          notes: data.Notes,
        });
      }
    } else {
      // Parse XLSX or XLS
      console.log("xlsx")
      const workbook = xlsx.readFile(file.path);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = xlsx.utils.sheet_to_json(sheet);

      results = data.map((row) => ({
        firstName: row.FirstName,
        phone: row.Phone,
        notes: row.Notes,
      }));
      console.log("results in xlsx", results);
    }

    // Clean up uploaded file
    fs.unlinkSync(file.path);

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
    res.status(200).json({ message: 'File uploaded and data distributed among agents' });

  } catch (error) {
    console.error('Error processing file:', error);
    res.status(500).json({ message: 'Something went wrong while processing the file' });
  }
});

module.exports = router;
