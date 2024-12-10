import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUserClock,
  FaMoneyBillWave,
  FaChartBar,
  FaFileContract,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Navbar = ({ role }) => {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    // Add logout logic here
    navigate("/login");
  };

  const navItems = [
    {
      title: "Absence & Leave",
      path: "/dashboard/absence",
      icon: <FaUserClock />,
      allowedRoles: ["ceo", "hr", "worker"],
    },
    {
      title: "Payroll Tracking",
      path: "/dashboard/payroll",
      icon: <FaMoneyBillWave />,
      allowedRoles: ["ceo", "hr", "contability"],
    },
    {
      title: "Accounting Reports",
      path: "/dashboard/accounting",
      icon: <FaChartBar />,
      allowedRoles: ["ceo", "contability"],
    },
    {
      title: "Contract & Documents",
      path: "/dashboard/contracts",
      icon: <FaFileContract />,
      allowedRoles: ["ceo", "hr"],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 h-full w-64 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg flex flex-col`}
    >
      <div className="p-4 flex-grow">
        <div className="flex items-center justify-between mb-8">
          {darkMode ? (
            <>
              <motion.img
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                src="/assets/nexhrd.png"
                alt="BlueBR"
                className="h-8 w-auto"
              />
            </>
          ) : (
            <>
              <motion.img
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                src="/assets/nexhrl.png"
                alt="BlueBird HR"
                className="h-8 w-auto"
              />
            </>
          )}
        </div>

        <div className="space-y-2">
          {navItems.map(
            (item, index) =>
              item.allowedRoles.includes(role) && (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-blue-600 text-white"
                      : `${
                          darkMode
                            ? "text-gray-100 hover:bg-gray-700"
                            : "text-gray-600 hover:bg-gray-100"
                        }`
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              )
          )}
        </div>
      </div>

      {/* Bottom section with theme toggle and logout */}
      <div
        className={`p-4 border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={toggleTheme}
            className={`flex items-center space-x-2 p-2 rounded-lg w-full ${
              darkMode
                ? "text-yellow-400 hover:bg-gray-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="text-xl">{darkMode ? <FaSun /> : <FaMoon />}</span>
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        <button
          onClick={handleLogout}
          className={`flex items-center space-x-2 p-2 rounded-lg w-full ${
            darkMode
              ? "text-red-400 hover:bg-gray-700"
              : "text-red-600 hover:bg-gray-100"
          }`}
        >
          <span className="text-xl">
            <FaSignOutAlt />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
