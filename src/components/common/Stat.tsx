import { IconType } from "react-icons";
import {motion} from 'framer-motion'
interface StatInterface {
  icon: IconType;
  title: string;
  amount: string;
  iconColor: string;
}

const Stat = ({ icon: Icon, title, amount, iconColor }: StatInterface) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 px-8 rounded-lg shadow hover:shadow-2xl flex flex-col gap-3 items-start justify-start"
    >
      <div className="flex items-center gap-2">
        <div className="text-white text-sm">{title}</div>
        <Icon className={`h-6 w-6 text-${iconColor}-500`} />
      </div>
      <h3 className="font-dana-demi text-white text-2xl">{amount}</h3>
    </motion.div>
  );
};

export default Stat;
