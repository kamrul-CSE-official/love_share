import React, { useState } from "react";
import { Share2, Lock, Users, Send, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      className="min-h-screen container mx-auto  bg-gradient-to-br from-blue-50 to-indigo-100 pt-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12 text-indigo-800"
        variants={itemVariants}
      >
        Welcome to <span className="text-pink-600">Love Share</span>
      </motion.h1>

      <motion.div
        className="hero bg-white rounded-box mb-8 sm:mb-16 shadow-lg"
        variants={itemVariants}
      >
        <div className="hero-content text-center py-12">
          <div className="max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-indigo-700">
              Share Files Effortlessly
            </h2>
            <p className="mb-6 text-gray-600">
              FileShare makes it easy to securely share your files with anyone,
              anywhere. Start sharing in seconds!
            </p>
            <motion.button
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white btn-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        variants={containerVariants}
      >
        {[
          {
            icon: Share2,
            title: "Easy Sharing",
            description: "Share files with just a few clicks",
          },
          {
            icon: Lock,
            title: "Secure Storage",
            description: "Your files are encrypted and protected",
          },
          {
            icon: Users,
            title: "Collaboration",
            description: "Work together on shared files",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="card-body items-center text-center"
              whileHover={{ y: -5 }}
            >
              <feature.icon className="h-16 w-16 text-indigo-600 mb-4" />
              <h3 className="card-title text-xl sm:text-2xl text-indigo-700">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-full max-w-md"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-indigo-700">
                Choose Your Purpose
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Link className="p-0 m-0" to="/send">
                  <motion.button
                    className="btn bg-indigo-600 hover:bg-indigo-700 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Files
                  </motion.button>
                </Link>
                <Link className="p-0 m-0" to="/receive">
                  <motion.button
                    className="btn bg-indigo-600 hover:bg-indigo-700 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Receive Files
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
