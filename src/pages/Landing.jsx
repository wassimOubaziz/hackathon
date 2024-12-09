import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartBar,
  FaFileContract,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`p-6 rounded-xl shadow-lg ${
        darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
      } transition-all duration-300 transform hover:-translate-y-1`}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {description}
      </p>
    </motion.div>
  );
};

const Landing = () => {
  const { darkMode, toggleTheme } = useTheme();

  const features = [
    {
      icon: FaCalendarAlt,
      title: "Absence & Leave Management",
      description:
        "Streamline leave requests, track absences, and manage employee time-off efficiently with our automated system.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Payroll Tracking",
      description:
        "Simplify payroll processing with automated calculations, tax deductions, and detailed salary reports.",
    },
    {
      icon: FaChartBar,
      title: "Accounting Reports",
      description:
        "Generate comprehensive financial reports, analyze expenses, and make data-driven decisions with ease.",
    },
    {
      icon: FaFileContract,
      title: "Contract & Document Management",
      description:
        "Securely store, manage, and track all employee contracts and important documents in one centralized location.",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            {darkMode ? (
              <>
                <motion.img
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  src="./assets/nexhrd.png"
                  alt="BlueBird HR"
                  className="h-8 w-auto"
                />
              </>
            ) : (
              <>
                <motion.img
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  src="./assets/nexhrl.png"
                  alt="BlueBird HR"
                  className="h-8 w-auto"
                />
              </>
            )}
          </motion.div>
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-600" />
              )}
            </motion.button>
            <Link
              to="/login"
              className="px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8"
          >
            Transform Your HR Management
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Streamline your HR processes with our all-in-one solution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className={`px-8 py-3 rounded-lg text-lg font-semibold ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } transition-colors`}
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Powerful Features for Modern HR
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={0.2 * (index + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            Ready to Transform Your HR Management?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl mb-12 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Join thousands of companies already using BlueBird HR
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/signup"
              className="px-8 py-3 rounded-lg bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              to="/login"
              className={`px-8 py-3 rounded-lg text-lg font-semibold ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-white hover:bg-gray-50"
              } transition-colors`}
            >
              Login
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            © 2024 BlueBird HR. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
