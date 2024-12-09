import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaEye } from 'react-icons/fa';

const ContractManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-6">Contract & Document Management</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contracts Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Contracts</h2>
          <div className="space-y-4">
            {/* Sample contracts */}
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <FaFileAlt className="text-blue-500" />
                <div>
                  <p className="font-medium">Employment Contract - John Doe</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Added: Dec 5, 2024</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-600 rounded">
                  <FaEye />
                </button>
                <button className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-gray-600 rounded">
                  <FaDownload />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <FaFileAlt className="text-blue-500" />
                <div>
                  <p className="font-medium">NDA - Project X</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Added: Dec 3, 2024</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-600 rounded">
                  <FaEye />
                </button>
                <button className="p-2 text-green-500 hover:bg-green-50 dark:hover:bg-gray-600 rounded">
                  <FaDownload />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Document Categories Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Document Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Employment Contracts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">15 documents</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">NDAs</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">8 documents</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Policies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">12 documents</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-medium">Legal Documents</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">6 documents</p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upload New Document</h2>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Drag and drop files here or click to browse
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Upload Document
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContractManagement;
