import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaCheck, FaTimes } from 'react-icons/fa';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

const AttendanceTracking = () => {
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [error, setError] = useState(null);
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    let scanner;

    if (scanning) {
      scanner = new Html5QrcodeScanner('reader', {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });

      scanner.render(onScanSuccess, onScanError);
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(console.error);
      }
    };
  }, [scanning]);

  const onScanSuccess = async (decodedText, decodedResult) => {
    try {
      setScanning(false);
      setScanResult(decodedText);
      
      // Replace with your actual API endpoint
      const response = await axios.post('/api/attendance', {
        qrCode: decodedText,
        timestamp: new Date().toISOString()
      });
      
      setScanned(true);
      setError(null);
    } catch (err) {
      setError('Failed to mark attendance. Please try again.');
      console.error('Attendance marking failed:', err);
    }
  };

  const onScanError = (errorMessage) => {
    setError('Error accessing camera. Please make sure you have granted camera permissions.');
    console.error(errorMessage);
  };

  const startScanning = () => {
    setScanning(true);
    setError(null);
    setScanResult(null);
    setScanned(false);
  };

  const stopScanning = () => {
    setScanning(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Scan QR Code for Attendance</h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {!scanning && !scanned && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startScanning}
              className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg font-semibold mb-4 flex items-center justify-center space-x-2"
            >
              <FaCamera className="text-xl" />
              <span>Start Scanning</span>
            </motion.button>
          )}

          {scanning && (
            <div className="relative">
              <div id="reader" className="w-full"></div>
              <button
                onClick={stopScanning}
                className="mt-4 w-full py-2 px-4 bg-gray-600 text-white rounded-lg"
              >
                Cancel Scanning
              </button>
            </div>
          )}

          {error && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 rounded-lg">
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}

          {scanned && (
            <div className="text-center p-4 bg-green-100 dark:bg-green-900 rounded-lg">
              <FaCheck className="text-green-500 text-3xl mx-auto mb-2" />
              <p className="text-green-700 dark:text-green-300 font-medium">
                Attendance marked successfully!
              </p>
              <button
                onClick={startScanning}
                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg"
              >
                Scan Again
              </button>
            </div>
          )}

          {scanResult && (
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Scan Result
              </h3>
              <p className="text-gray-600 dark:text-gray-300 break-all">
                {scanResult}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AttendanceTracking;
