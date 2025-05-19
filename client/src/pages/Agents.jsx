// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function Agents() {
//   const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '' })
//   const [agents, setAgents] = useState([])

//   const fetchAgents = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/agents')
//       setAgents(res.data)
//     } catch (err) {
//       console.error('Failed to fetch agents')
//     }
//   }

//   useEffect(() => {
//     fetchAgents()
//   }, [])

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await axios.post('http://localhost:5000/api/agents', formData)
//       fetchAgents()
//       setFormData({ name: '', email: '', mobile: '', password: '' })
//     } catch (err) {
//       alert('Error adding agent')
//     }
//   }

//   return (
//     <div>
//       <h2>Agent Management</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <input name="mobile" placeholder="Mobile Number (with code)" value={formData.mobile} onChange={handleChange} required />
//         <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} required />
//         <button type="submit">Add Agent</button>
//       </form>

//       <h3>Agent List</h3>
//       <ul>
//         {agents.map((agent) => (
//           <li key={agent._id}>
//             {agent.name} - {agent.email} - {agent.mobile}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Agents



import { useEffect, useState } from 'react';
import axios from 'axios';

function Agents() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '' });
  const [agents, setAgents] = useState([]);

  const fetchAgents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/agents');
      setAgents(res.data);
    } catch (err) {
      console.error('Failed to fetch agents');
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/agents', formData);
      fetchAgents();
      setFormData({ name: '', email: '', mobile: '', password: '' });
    } catch (err) {
      alert('Error adding agent');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">👥 Agent Management</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="mobile"
            placeholder="Mobile Number (with code)"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          ➕ Add Agent
        </button>
      </form>

      {/* Agent List */}
      <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">📄 Registered Agents</h3>
      <div className="max-w-3xl mx-auto space-y-4">
        {agents.map((agent) => (
          <div
            key={agent._id}
            className="bg-white shadow-sm border rounded-lg p-4 flex justify-between items-center hover:shadow-md transition"
          >
            <div>
              <p className="font-semibold text-gray-800">{agent.name}</p>
              <p className="text-sm text-gray-600">{agent.email}</p>
              <p className="text-sm text-gray-600">{agent.mobile}</p>
            </div>
          </div>
        ))}
        {agents.length === 0 && (
          <p className="text-center text-gray-500">No agents added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Agents;
