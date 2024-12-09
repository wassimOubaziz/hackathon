import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGoogle, FaMoon, FaSun } from 'react-icons/fa';

const Login = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md w-full space-y-8 p-8 rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/logo.png"
              alt="BlueBird HR"
              className="h-8 w-auto"
            />
            <h2 className="ml-2 text-2xl font-bold">BlueBird HR</h2>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </motion.button>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-extrabold">Login</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Welcome back! Please enter your details
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                }`}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className={`group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md ${
                darkMode
                  ? 'border-gray-600 hover:bg-gray-700'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              <FaGoogle className="mr-2 h-5 w-5 text-red-500" />
              Login with Google
            </motion.button>
          </div>
        </form>

        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
