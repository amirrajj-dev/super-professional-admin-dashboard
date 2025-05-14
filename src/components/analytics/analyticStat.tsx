import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";


const colorMap: Record<string, { bg: string; text: string }> = {
  primary: { bg: "bg-primary", text: "text-primary-content" },
  secondary: { bg: "bg-secondary", text: "text-secondary-content" },
  emerald: { bg: "bg-emerald-500", text: "text-emerald-50" },
  success: { bg: "bg-success", text: "text-success-content" },
  error: { bg: "bg-error", text: "text-error-content" },
};

interface StatInterface {
  icon: IconType;
  title: string;
  amount: string;
  iconColor: string;
  isGrowing: boolean;
  growthAmount: string;
}

const AnalyticStat = ({
  icon: Icon,
  title,
  amount,
  iconColor,
  isGrowing,
  growthAmount,
}: StatInterface) => {

  const color = colorMap[iconColor] || { bg: "bg-gray-500", text: "text-gray-50" };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-base-300 py-6 px-8 rounded-lg shadow-lg hover:shadow-xl flex flex-col gap-4"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-base-content flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-2xl font-bold">{amount}</span>
        </div>
        <div className={`${color.bg} w-14 h-14 p-3 rounded-full flex items-center justify-center`}>
          <Icon className={`${color.text} w-8 h-8`} />
        </div>
      </div>
      <h3 className="text-base-content text-sm font-medium mt-2">
        {isGrowing ? (
          <span className="text-success flex items-center gap-1">
            <FaArrowTrendUp className="w-5 h-5" /> {growthAmount} <span className="text-base-content"> در مقایسه با ماه قبل</span>
          </span>
        ) : (
          <span className="text-error flex items-center gap-1">
            <FaArrowTrendDown className="w-5 h-5" /> {growthAmount} <span className="text-base-content"> در مقایسه با ماه قبل</span>
          </span>
        )}
      </h3>
    </motion.div>
  );
};

export default AnalyticStat;