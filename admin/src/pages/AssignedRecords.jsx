import { useEffect, useState } from 'react'
import axios from 'axios'

function AssignedRecords() {
  const [records, setRecords] = useState({})

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/records-by-agent', 
        //     {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem('token')}`,
        //   },
        // }
    )
        setRecords(res.data)
      } catch (err) {
        console.error('Error fetching records', err)
      }
    }

    fetchRecords()
  }, [])

  return (
    <div>
      <h2>Assigned Records</h2>
      {Object.keys(records).map(agentName => (
        <div key={agentName} style={{ marginBottom: '20px' }}>
          <h3>{agentName}</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Phone</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {records[agentName].map((record, idx) => (
                <tr key={idx}>
                  <td>{record.firstName}</td>
                  <td>{record.phone}</td>
                  <td>{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default AssignedRecords
