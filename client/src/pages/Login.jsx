// import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// function Login() {
//     const backendUrl=import.meta.env.VITE_API_URL
// console.log(backendUrl)
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const navigate = useNavigate()

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     try {
//       console.log("hello motto")
//       const res = await axios.post(`${backendUrl}/api/login`, {
//         email,
//         password,
//       })
//       localStorage.setItem('token', res.data.token)
//       navigate('/dashboard')
//     } catch (err) {
//       setError('Invalid email or password')
//     }
//   }

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </form>
//     </div>

//   )
// }

// export default Login



import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const backendUrl = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
