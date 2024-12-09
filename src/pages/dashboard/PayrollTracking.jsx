import React from 'react';
import { motion } from 'framer-motion';

const PayrollTracking = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-2xl font-bold mb-6">Payroll Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Payroll Summary Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Payroll Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Total Payroll</span>
              <span className="font-bold">$125,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Employees</span>
              <span className="font-bold">45</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Average Salary</span>
              <span className="font-bold">$2,777</span>
            </div>
          </div>
        </div>

        {/* Recent Payments Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Payments</h2>
          <div className="space-y-4">
            {/* Sample payment entries */}
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">December 2024</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Processed on Dec 1</p>
              <p className="text-sm text-gray-500">Total: $125,000</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium">November 2024</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Processed on Nov 1</p>
              <p className="text-sm text-gray-500">Total: $123,000</p>
            </div>
          </div>
        </div>

        {/* Upcoming Payments Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Payments</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Next Payment Date</span>
              <span className="font-bold">Jan 1, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Estimated Amount</span>
              <span className="font-bold">$126,000</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PayrollTracking;
