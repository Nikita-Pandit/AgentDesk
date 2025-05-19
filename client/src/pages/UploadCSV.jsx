// import { useState } from 'react'
// import axios from 'axios'

// function UploadCSV() {
//   const [file, setFile] = useState(null)
//   const [message, setMessage] = useState('')

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0])
//   }

//   const handleUpload = async () => {
//     if (!file) return alert('Please select a file')

//     const formData = new FormData()
//     formData.append('file', file)

//     try {
//       console.log("upload section");
//       const res = await axios.post('http://localhost:5000/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       })
//       setMessage(res.data.message)
//     } catch (err) {
//       setMessage('Upload failed')
//     }
//   }

//   return (
//     <div>
//       <h2>Upload CSV</h2>
//       <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {message && <p>{message}</p>}
//     </div>
//   )
// }

// export default UploadCSV



import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function UploadCSV() {
  const navigate=useNavigate()
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('file', file);

    try {
      console.log('upload section');
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(res.data)
      setMessage(res.data.message);
      setTimeout(()=>{
        navigate("/records")
      }, 2000)
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">📤 Upload CSV File</h2>

        <div className="mb-4">
          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          onClick={handleUpload}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Upload
        </button>

        {message && (
          <p className={`mt-4 text-center font-medium ${message.includes('failed') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadCSV;
