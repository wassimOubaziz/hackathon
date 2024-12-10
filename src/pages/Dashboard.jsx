import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import AbsenceManagement from "./dashboard/AbsenceManagement";
import PayrollTracking from "./dashboard/PayrollTracking";
import AccountingReports from "./dashboard/AccountingReports";
import ContractManagement from "./dashboard/ContractManagement";
import LeaveRequests from "./dashboard/dashboard-absence/LeaveRequests";
import AttendanceTracking from "./dashboard/AttendanceTracking";
import WorkerProfile from "./dashboard/worker/WorkerProfile";
import LeaveRequest from "./dashboard/worker/LeaveRequest";
import WorkerHistory from "./dashboard/worker/WorkerHistory";

const Dashboard = () => {
  const { darkMode } = useTheme();
  // This would typically come from your authentication context
  const userRole = "worker"; // Changed to worker for testing

  const getDefaultRoute = (role) => {
    switch (role) {
      case "worker":
        return "/dashboard/worker/profile";
      case "hr":
        return "/dashboard/absence";
      default:
        return "/dashboard/attendance";
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar role={userRole} />
      <div className="ml-64 p-8">
        <Routes>
          {/* Worker Routes */}
          <Route path="/worker/profile" element={<WorkerProfile />} />
          <Route path="/worker/leave-request" element={<LeaveRequest />} />
          <Route path="/worker/history" element={<WorkerHistory />} />

          {/* Management Routes */}
          <Route path="/attendance" element={<AttendanceTracking />} />
          <Route path="/absence/*" element={<AbsenceManagement />}>
            <Route path="leaverequests" element={<LeaveRequests />} />
          </Route>
          <Route path="/payroll" element={<PayrollTracking />} />
          <Route path="/accounting" element={<AccountingReports />} />
          <Route path="/contracts" element={<ContractManagement />} />

          {/* Default Route */}
          <Route
            path="/"
            element={<Navigate to={getDefaultRoute(userRole)} replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
