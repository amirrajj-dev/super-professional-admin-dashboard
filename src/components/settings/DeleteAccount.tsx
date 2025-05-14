import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteAccount = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-br from-red-600 to-red-800 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-xl"
    >
      <motion.h2
        className="flex flex-col sm:flex-row items-center text-xl sm:text-2xl gap-3 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="text-3xl sm:text-4xl text-white"
          whileHover={{ scale: 1.3, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaRegTrashAlt />
        </motion.div>
        <span className="text-white font-semibold">منطقه خطر</span>
      </motion.h2>
      <p className="text-white text-lg mb-4">
        اکانت شما و تمام محتوای آن به طور دائمی پاک خواهد شد.
      </p>
      <button className="btn btn-error w-full sm:w-auto mt-6">
        تغیر رمز عبور
      </button>
    </motion.div>
  );
};

export default DeleteAccount;