import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useOutlet } from "react-router";
import { Outlet, useLocation } from "react-router-dom";
import { FaCheck, FaEye } from "react-icons/fa";
import PathBar from "../../components/PathBar";

const AbsenceManagement = () => {
  const location = useLocation();
  const outlet = useOutlet();

  // State for attendance data
  const [attendanceData, setAttendanceData] = useState(null);

  // State for minimum workers
  const [minWorkers, setMinWorkers] = useState("");

  const checkAttendance = () => {
    // Simulate server request
    setTimeout(() => {
      const dataFromServer = [
        { name: "John Doe", status: "Absent", date: "2024-12-10" },
        { name: "Sarah", status: "Absent", date: "2024-12-10" },
      ]; // Example response
      setAttendanceData(dataFromServer); // Update state with server data
    }, 1000); // Simulated delay
  };

  const viewAbsences = () => {
    alert("Redirecting to absence details..."); // Placeholder action
    // You can navigate to another page or show details here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <PathBar title="Absence & Leave Management" backLink="/dashboard" />

      {outlet ? (
        <div className="mt-8">
          <Outlet />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Leave Request Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <Link to={"/dashboard/absence/leaverequests"}>
                <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  Leave Requests
                </h2>
              </Link>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    John Doe
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Vacation Leave
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dec 20 - Dec 25
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Leave Statistics
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    Vacation Days Left
                  </span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    15 days
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">
                    Sick Leave Left
                  </span>
                  <span className="font-bold text-gray-900 dark:text-gray-100">
                    7 days
                  </span>
                </div>
              </div>
            </div>

            {/* Calendar Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                See Todays Absences
              </h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Current Team Absences
                </p>
                <div className="text-sm">
                  <p className="py-1">Sarah - Out until Dec 15</p>
                  <p className="py-1">Mike - Remote on Dec 16</p>
                </div>
              </div>
            </div>

            {/* Minimum Workers Input */}
            <div className="w-full p-4">
              <label
                htmlFor="min-workers"
                className="block text-lg font-bold text-gray-700 dark:text-gray-300 mb-2"
              >
                Min number of workers
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  id="min-workers"
                  value={minWorkers}
                  onChange={(e) => setMinWorkers(e.target.value)}
                  className="flex-grow p-2 text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition duration-200"
                  placeholder="Enter minimum workers"
                />
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition duration-200">
                  Edit
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-500 transition duration-200">
                  Save
                </button>
              </div>
            </div>
          </div>

          {/* Check Attendance Button */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <button
              onClick={checkAttendance}
              className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-300 transition duration-200"
            >
              <FaCheck className="inline mr-2" />
              Check Attendance
            </button>

            {attendanceData && attendanceData.length > 0 && (
              <button
                onClick={viewAbsences}
                className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 transition duration-200"
              >
                <FaEye className="inline mr-2" />
                View Absences
              </button>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default AbsenceManagement;
