import React from "react";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface SettingsCardInterface {
  Icon: IconType;
  title: string;
}

const SettingsCardContainer = ({ children, Icon, title }: { children: React.ReactNode } & SettingsCardInterface) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg"
    >
      <motion.h2
        className="flex flex-col  sm:flex-row items-center text-xl sm:text-2xl gap-3 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="text-2xl mb-2 sm:text-3xl text-indigo-400"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon />
        </motion.div>
        <span className="text-white font-dana-demi">{title}</span>
      </motion.h2>
      {children}
    </motion.div>
  );
};

export default SettingsCardContainer;