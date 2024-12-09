import React from 'react';
import { motion } from 'framer-motion';

const AbsenceManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-6">Absence & Leave Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Leave Request Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Leave Requests</h2>
          <div className="space-y-4">
            {/* Sample leave request */}
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Vacation Leave</p>
              <p className="text-sm text-gray-500">Dec 20 - Dec 25</p>
            </div>
          </div>
        </div>

        {/* Statistics Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Leave Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Vacation Days Left</span>
              <span className="font-bold">15 days</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Sick Leave Left</span>
              <span className="font-bold">7 days</span>
            </div>
          </div>
        </div>

        {/* Calendar Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Team Calendar</h2>
          <div className="space-y-2">
            <p className="text-sm">Current Team Absences</p>
            {/* Sample calendar entries */}
            <div className="text-sm">
              <p>Sarah - Out until Dec 15</p>
              <p>Mike - Remote on Dec 16</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AbsenceManagement;
