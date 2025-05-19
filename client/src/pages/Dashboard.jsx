// import { useNavigate } from 'react-router-dom'

// function Dashboard() {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     navigate('/')
//   }

//   return (
//     <div>
//       <h2>Welcome, Admin</h2>
//       <button onClick={() => navigate('/upload')}>Upload CSV</button>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   )
// }

// export default Dashboard



import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Welcome, Admin 🎉</h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/upload')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Upload CSV
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
