import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const PathBar = ({ title = "Page Title", backLink = "/" }) => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const handleBackClick = () => {
    navigate(backLink);
  };

  return (
    <div className="flex items-center mb-4 gap-4">
      <button
        onClick={handleBackClick}
        className="text-2xl bg-white p-1 rounded hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      >
        {darkMode ? (
          <FaBackspace className="bg-gray-900 text-white" />
        ) : (
          <FaBackspace />
        )}
      </button>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
};

export default PathBar;
