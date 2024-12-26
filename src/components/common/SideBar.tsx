import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
// menuItems.js
import { MdOutlineSettings } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";

export const menuItems = [
  { name: 'خانه', icon: IoIosStats, color: 'text-blue-500', href: '/' },
  { name: 'محصولات', icon: FiShoppingBag, color: 'text-purple-500', href: '/products' },
  { name: 'کاربران', icon: FiUsers, color: 'text-red-500', href: '/users' },
  { name: 'فروش', icon: FiDollarSign, color: 'text-emerald-500', href: '/sales' },
  { name: 'سفارشات', icon: IoCartOutline, color: 'text-yellow-500', href: '/orders' },
  { name: 'آنالیزها', icon: FaArrowTrendUp, color: 'text-cyan-500', href: '/analytics' },
  { name: 'تنظیمات', icon: MdOutlineSettings, color: 'text-green-500', href: '/settings' },
];


const SideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600;
      setShowMobileSidebar(isMobile);
      setIsSideBarOpen(isMobile);
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <motion.div
      animate={{ width: isSideBarOpen && !showMobileSidebar ? '256px' : '80px' }}
      className="pt-10 px-2 sm:px-5 relative z-50 transition-all duration-300 ease-in-out bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm h-screen shadow-lg"
    >
      <div className="hidden sm:block">
        <motion.button onClick={toggleSideBar} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="absolute hover:bg-gray-700 rounded-full p-1 top-6 right-5">
          <IoMenu className="text-3xl text-white cursor-pointer transition duration-300" />
        </motion.button>
      </div>
      <ul className="flex flex-col gap-4 sm:gap-6 mt-8 sm:mt-12 text-white text-sm sm:text-lg capitalize tracking-wide">
        {menuItems.map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className="hover:bg-gray-700 rounded transition duration-300">
            <Link to={item.href} className="flex items-center gap-2 sm:gap-3 p-1 sm:p-1.5">
              <item.icon className={`${item.color} ${showMobileSidebar ? 'mr-4' : ''} text-lg sm:text-xl`} />
              <AnimatePresence>
                {isSideBarOpen && (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hidden sm:block"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SideBar;