import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGoogle, FaMoon, FaSun, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
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
    console.log('Signup attempt:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const InputField = ({ icon: Icon, ...props }) => (
    <motion.div variants={itemVariants} className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className={`h-5 w-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
      </div>
      <input
        {...props}
        className={`pl-10 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
          darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'
        }`}
      />
    </motion.div>
  );

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md w-full space-y-8 p-8 rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              src="/logo.png"
              alt="BlueBird HR"
              className="h-8 w-auto"
            />
            <h2 className="ml-2 text-2xl font-bold">BlueBird HR</h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-extrabold"
          >
            Create Account
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            Join our community today!
          </motion.p>
        </motion.div>

        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <InputField
              icon={FaUser}
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <InputField
              icon={FaEnvelope}
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              icon={FaLock}
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <InputField
              icon={FaLock}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <motion.div variants={itemVariants} className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm">
                I agree to the Terms and Conditions
              </label>
            </motion.div>
          </div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
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
              Sign up with Google
            </motion.button>
          </div>
        </motion.form>

        <motion.p 
          variants={itemVariants}
          className="mt-4 text-center text-sm"
        >
          Already have an account?{' '}
          <Link to="/" className="font-medium text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
