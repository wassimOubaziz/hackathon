import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaEnvelope, FaUserTag, FaCheck } from 'react-icons/fa';

const AddUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    sendInvite: true
  });

  const [status, setStatus] = useState({ type: '', message: '' });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Replace with actual API call
      console.log('Adding user:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        type: 'success',
        message: `Invitation sent to ${formData.email}`
      });
      
      // Reset form
      setFormData({
        email: '',
        role: '',
        sendInvite: true
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to add user. Please try again.'
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaUserPlus className="mr-2" /> Add New User
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <FaEnvelope className="inline mr-2" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                placeholder="user@company.com"
              />
            </div>

            

            {/* Send Invite Checkbox */}
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="sendInvite"
                  checked={formData.sendInvite}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  Send invitation email
                </span>
              </label>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`mb-6 p-4 rounded-md ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                  : 'bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-100'
              }`}>
                {status.message}
              </div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaUserPlus className="mr-2" />
              Add User
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddUser;
