import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div>
      <h2>Welcome, Admin</h2>
      <button onClick={() => navigate('/upload')}>Upload CSV</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
