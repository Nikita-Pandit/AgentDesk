// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function AssignedRecords() {
//   const [records, setRecords] = useState({})

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/records-by-agent', 
//         //     {
//         //   headers: {
//         //     Authorization: `Bearer ${localStorage.getItem('token')}`,
//         //   },
//         // }
//     )
//         setRecords(res.data)
//       } catch (err) {
//         console.error('Error fetching records', err)
//       }
//     }

//     fetchRecords()
//   }, [])

//   return (
//     <div>
//       <h2>Assigned Records</h2>
//       {Object.keys(records).map(agentName => (
//         <div key={agentName} style={{ marginBottom: '20px' }}>
//           <h3>{agentName}</h3>
//           <table border="1" cellPadding="8">
//             <thead>
//               <tr>
//                 <th>First Name</th>
//                 <th>Phone</th>
//                 <th>Notes</th>
//               </tr>
//             </thead>
//             <tbody>
//               {records[agentName].map((record, idx) => (
//                 <tr key={idx}>
//                   <td>{record.firstName}</td>
//                   <td>{record.phone}</td>
//                   <td>{record.notes}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default AssignedRecords




import { useEffect, useState } from 'react';
import axios from 'axios';

function AssignedRecords() {
  const [records, setRecords] = useState({});

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/records-by-agent',
           {
          headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
         }
        );
        setRecords(res.data);
      } catch (err) {
        console.error('Error fetching records', err);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">📋 Assigned Records to Agents</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(records).map((agentName, index) => (
          <div key={agentName} className="bg-white shadow-lg rounded-xl p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              🧑 {agentName}
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="text-xs uppercase bg-blue-100 text-blue-700">
                  <tr>
                    <th className="px-4 py-2">First Name</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {records[agentName].map((record, idx) => (
                    <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-2">{record.firstName}</td>
                      <td className="px-4 py-2">{record.phone}</td>
                      <td className="px-4 py-2">{record.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignedRecords;
