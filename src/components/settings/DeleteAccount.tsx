import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteAccount = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-red-500 to-red-900 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-lg"
    >
      <motion.h2
        className="flex flex-col  sm:flex-row items-center text-xl sm:text-2xl gap-3 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="text-2xl mb-2 sm:text-3xl text-white"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaRegTrashAlt />
        </motion.div>
        <span className="text-white font-dana-demi">منطقه خطر</span>
      </motion.h2>
      <h2 className="text-white">
        اکانت شما و تمام محتوای آن به طور داعمی پاک خواهد شد .
      </h2>
      <button className="bg-red-600 hover:bg-red-700 mt-6 rounded transition duration-200 text-white font-dana-medium py-2 px-4">
        تغیر رمز عبور
      </button>
    </motion.div>
  );
};

export default DeleteAccount;
