import Header from "../components/common/Header.tsx";
import Stat from "../components/common/Stat.tsx";
import SaleChart from "../components/overview/SaleChart";
import CategoryChart from "../components/common/CategoryChart.tsx";
import { motion } from "framer-motion";
import SalesChart from "../components/overview/SalesChart.tsx";
import { overviewStats } from "../db/data.ts";
import { IconType } from "react-icons";

interface overviewStatsInterface {
  id: number;
  title: string;
  icon: IconType;
  amount: string;
  color: string;
}

const OverviewPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="خانه" />
      <div className="m-4 md:m-12">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {overviewStats.map((stat: overviewStatsInterface) => (
            <Stat
              key={stat.id}
              icon={stat.icon}
              amount={stat.amount}
              title={stat.title}
              iconColor={stat.color}
            />
          ))}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-base-300 text-base-content rounded-lg"
          >
            <h2 className="font-dana-demi text-2xl m-4">میزان فروش</h2>
            <SaleChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-base-300 text-base-content rounded-lg"
          >
            <h2 className="font-dana-demi text-2xl m-4">توزیع دسته بندی</h2>
            <CategoryChart />
          </motion.div>
        </div>

        <div className="mt-8 sm:mt-16 bg-base-300 text-base-content rounded-lg p-4">
          <h2 className="font-dana-demi text-2xl m-4">فروش کانال</h2>
          <SalesChart />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;