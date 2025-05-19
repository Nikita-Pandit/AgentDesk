import { useState } from 'react'
import axios from 'axios'

function UploadCSV() {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) return alert('Please select a file')

    const formData = new FormData()
    formData.append('file', file)

    try {
      console.log("upload section");
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      })
      setMessage(res.data.message)
    } catch (err) {
      setMessage('Upload failed')
    }
  }

  return (
    <div>
      <h2>Upload CSV</h2>
      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default UploadCSV
