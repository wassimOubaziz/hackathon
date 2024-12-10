import React from 'react';
import { motion } from 'framer-motion';

const AbsenceManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-gray-100">
        Absence & Leave Management
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Leave Request Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
            Leave Requests
          </h2>
          <div className="space-y-4">
            {/* Sample leave request */}
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <p className="font-medium text-gray-900 dark:text-gray-100">John Doe</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Vacation Leave</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dec 20 - Dec 25</p>
            </div>
            <div className="border-l-4 border-green-600 dark:border-green-400 pl-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
              <p className="font-medium text-gray-900 dark:text-gray-100">Jane Smith</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Sick Leave</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Dec 18 - Dec 19</p>
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
            Leave Statistics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Vacation Days Left</span>
              <span className="font-bold text-gray-900 dark:text-gray-100">15 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Sick Leave Left</span>
              <span className="font-bold text-gray-900 dark:text-gray-100">7 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Personal Days Left</span>
              <span className="font-bold text-gray-900 dark:text-gray-100">3 days</span>
            </div>
          </div>
        </div>

        {/* Calendar Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-200">
            Team Calendar
          </h2>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Current Team Absences
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="py-1 border-b border-gray-200 dark:border-gray-700">Sarah - Out until Dec 15</p>
              <p className="py-1 border-b border-gray-200 dark:border-gray-700">Mike - Remote on Dec 16</p>
              <p className="py-1">Alex - Half day on Dec 17</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AbsenceManagement;
