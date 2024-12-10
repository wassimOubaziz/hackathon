import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaCalendarCheck, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const WorkerHistory = () => {
  // Mock data - replace with actual API calls
  const history = {
    leaveHistory: [
      { id: 1, type: 'Annual Leave', startDate: '2023-12-01', endDate: '2023-12-05', status: 'Approved' },
      { id: 2, type: 'Sick Leave', startDate: '2023-11-15', endDate: '2023-11-16', status: 'Approved' },
      { id: 3, type: 'Casual Leave', startDate: '2023-10-20', endDate: '2023-10-20', status: 'Rejected' },
    ],
    paymentHistory: [
      { id: 1, date: '2023-12-01', amount: '5000', type: 'Salary' },
      { id: 2, date: '2023-11-01', amount: '5000', type: 'Salary' },
      { id: 3, date: '2023-12-15', amount: '1000', type: 'Bonus' },
    ],
    attendanceHistory: [
      { id: 1, date: '2023-12-09', checkIn: '09:00', checkOut: '17:00', status: 'Present' },
      { id: 2, date: '2023-12-08', checkIn: '08:55', checkOut: '17:05', status: 'Present' },
      { id: 3, date: '2023-12-07', checkIn: '-', checkOut: '-', status: 'Absent' },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <FaHistory className="mr-2" /> My History
      </h1>

      <div className="grid grid-cols-1 gap-8">
        {/* Leave History */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaCalendarCheck className="mr-2" /> Leave History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Start Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">End Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {history.leaveHistory.map((leave) => (
                  <tr key={leave.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{leave.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{leave.startDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{leave.endDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        leave.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {leave.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaMoneyBillWave className="mr-2" /> Payment History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {history.paymentHistory.map((payment) => (
                  <tr key={payment.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{payment.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendance History */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaClock className="mr-2" /> Attendance History
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Check In</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Check Out</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {history.attendanceHistory.map((attendance) => (
                  <tr key={attendance.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{attendance.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{attendance.checkIn}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{attendance.checkOut}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        attendance.status === 'Present' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {attendance.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkerHistory;
