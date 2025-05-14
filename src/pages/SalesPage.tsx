import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { salesStats } from "../db/data";
import Stat from "../components/common/Stat";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import CategoryChart from "../components/common/CategoryChart";
import SalesTrendChart from "../components/sales/SalesTrendChart";

const SalesPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="فروش ها" />
      <div className="m-4 md:m-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {salesStats.map((stat, index) => (
            <Stat
              key={index}
              amount={stat.amount}
              icon={stat.icon}
              iconColor={stat.iconColor}
              title={stat.title}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-base-300 text-base-content rounded-lg p-6 my-8"
        >
          <h2 className="font-dana-demi text-2xl m-4">نمای کلی فروش</h2>
          <SalesOverviewChart />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] my-6 md:my-0 bg-base-300 text-base-content rounded-lg"
          >
            <h2 className="font-dana-demi text-2xl m-4">افزایش کاربر</h2>
            <SalesTrendChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-base-300 text-base-content rounded-lg"
          >
            <h2 className="font-dana-demi text-2xl m-4">
              فروش بر اساس دسته بندی
            </h2>
            <CategoryChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;