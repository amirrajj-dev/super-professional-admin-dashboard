import { IconType } from "react-icons";
import { motion } from 'framer-motion';
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

interface StatInterface {
  icon: IconType;
  title: string;
  amount: string;
  iconColor: string;
  isGrowing: boolean;
  growthAmount: string;
}

const AnalyticStat = ({ icon: Icon, title, amount, iconColor, isGrowing, growthAmount }: StatInterface) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-6 px-8 rounded-lg shadow-lg hover:shadow-2xl flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-white text-base flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-2xl font-bold">{amount}</span>
        </div>
        <div className={`w-14 h-14 p-3 rounded-full bg-${iconColor}-600 flex items-center justify-center`}>
          <Icon className={`text-${iconColor}-500 w-8 h-8 brightness-200`} />
        </div>
      </div>
      <h3 className="text-white text-sm font-medium mt-2">
        {isGrowing ? (
          <span className="text-emerald-500 flex items-center gap-1">
            <FaArrowTrendUp className="w-5 h-5" /> {growthAmount} <span className="text-gray-400"> در مقایسه با ماه قبل</span>
          </span>
        ) : (
          <span className="text-red-500 flex items-center gap-1">
            <FaArrowTrendDown className="w-5 h-5" /> {growthAmount} <span className="text-gray-400"> در مقایسه با ماه قبل</span>
          </span>
        )}
      </h3>
    </motion.div>
  );
};

export default AnalyticStat;