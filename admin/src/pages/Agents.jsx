import { useEffect, useState } from 'react'
import axios from 'axios'

function Agents() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '' })
  const [agents, setAgents] = useState([])

  const fetchAgents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/agents')
      setAgents(res.data)
    } catch (err) {
      console.error('Failed to fetch agents')
    }
  }

  useEffect(() => {
    fetchAgents()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/api/agents', formData)
      fetchAgents()
      setFormData({ name: '', email: '', mobile: '', password: '' })
    } catch (err) {
      alert('Error adding agent')
    }
  }

  return (
    <div>
      <h2>Agent Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="mobile" placeholder="Mobile Number (with code)" value={formData.mobile} onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Add Agent</button>
      </form>

      <h3>Agent List</h3>
      <ul>
        {agents.map((agent) => (
          <li key={agent._id}>
            {agent.name} - {agent.email} - {agent.mobile}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Agents
