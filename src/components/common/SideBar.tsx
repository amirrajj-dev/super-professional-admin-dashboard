import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FiUsers, FiShoppingBag, FiDollarSign } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";

export const menuItems = [
  { name: 'خانه', icon: IoIosStats, color: 'text-primary', href: '/' },
  { name: 'محصولات', icon: FiShoppingBag, color: 'text-secondary', href: '/products' },
  { name: 'کاربران', icon: FiUsers, color: 'text-error', href: '/users' },
  { name: 'فروش', icon: FiDollarSign, color: 'text-success', href: '/sales' },
  { name: 'سفارشات', icon: IoCartOutline, color: 'text-warning', href: '/orders' },
  { name: 'آنالیزها', icon: FaArrowTrendUp, color: 'text-info', href: '/analytics' },
  { name: 'تنظیمات', icon: MdOutlineSettings, color: 'text-accent', href: '/settings' },
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
      animate={{ width: isSideBarOpen && !showMobileSidebar ? '256px' : '75px' }}
      className={`${showMobileSidebar ? 'pt-0' : 'pt-10'} px-2 sm:px-4 relative z-50 transition-all duration-300 ease-in-out bg-base-300 backdrop-blur-sm h-screen shadow-lg`}
    >
      <div className={`${showMobileSidebar ? 'hidden' : 'block'}`}>
        <motion.button
          onClick={toggleSideBar}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute hover:bg-neutral-focus rounded-full p-1 top-6 right-5"
        >
          <IoMenu className="text-3xl text-base-content cursor-pointer transition duration-300" />
        </motion.button>
      </div>

      <ul className="flex flex-col space-y-6 sm:space-y-6 mt-8 sm:mt-14 text-base-content text-sm sm:text-base">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="tooltip tooltip-left"
            data-tip={showMobileSidebar ? item.name : ''}
          >
            <Link
              to={item.href}
              className={`flex items-center gap-3 rounded-lg hover:bg-neutral ${showMobileSidebar ? 'p-5' : 'p-2'} transition-all duration-300`}
            >
              <item.icon
                className={`${item.color} text-lg sm:text-xl`}
              />
              <AnimatePresence>
                {isSideBarOpen && !showMobileSidebar && (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
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