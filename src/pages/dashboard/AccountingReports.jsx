import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext"; // Assuming you have this hook

const AccountingReports = () => {
  const { darkMode } = useTheme(); // Get darkMode state from the context

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Accounting Reports
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Financial Summary Card */}
        <div
          className={`rounded-lg shadow p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Financial Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Revenue</span>
              <span className="font-bold text-green-500">$500,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Expenses</span>
              <span className="font-bold text-red-500">$350,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Net Profit</span>
              <span className="font-bold">$150,000</span>
            </div>
          </div>
        </div>

        {/* Expense Breakdown Card */}
        <div
          className={`rounded-lg shadow p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Expense Breakdown
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Payroll</span>
              <span className="font-bold">70%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Operations</span>
              <span className="font-bold">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Marketing</span>
              <span className="font-bold">10%</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions Card */}
        <div
          className={`rounded-lg shadow p-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-lg font-semibold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Recent Transactions
          </h2>
          <div className="space-y-4">
            {/* Sample transactions */}
            <div className="border-l-4 border-blue-500 pl-4">
              <p
                className={`font-medium ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Payroll Payment
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Dec 1, 2024
              </p>
              <p className="text-sm text-red-500">-$125,000</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p
                className={`font-medium ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Client Payment
              </p>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Dec 5, 2024
              </p>
              <p className="text-sm text-green-500">+$50,000</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountingReports;
