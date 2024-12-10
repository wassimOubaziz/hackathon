import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
import AddUser from "./dashboard/admin/AddUser";
import UserManagement from "./dashboard/admin/UserManagement";
import UserSettings from "./dashboard/UserSettings";

const Dashboard = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  // This would typically come from your authentication context
  const companyName = localStorage.getItem("companyName");
  const userRole = localStorage.getItem("userRole");
  if (!Boolean(companyName) && userRole !== "ceo") {
    navigate("/login");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
  }

  const getDefaultRoute = (role) => {
    switch (role) {
      case "worker":
        return "/dashboard/worker/profile";
      case "hr":
        return "/dashboard/profile";
      case "ceo":
        return "/dashboard/admin/users";
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
          {/* Admin Routes */}
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/users" element={<UserManagement />} />

          {/* Worker Routes */}
          <Route path="/worker/profile" element={<WorkerProfile />} />
          <Route path="/worker/leave-request" element={<LeaveRequest />} />
          <Route path="/worker/history" element={<WorkerHistory />} />

          {/* Common Routes */}
          <Route path="/settings" element={<UserSettings />} />
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
