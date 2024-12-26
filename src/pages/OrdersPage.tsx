import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { ordersStats } from "../db/data";
import Stat from "../components/common/Stat";
import { IconType } from "react-icons";
import OrderDistributionChart from "../components/orders/OrderDistributionChart";
import DailyOrderChart from "../components/orders/DailyOrderChart";
import OrdersListTable from "../components/orders/OrderListTable";
const OrdersPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="سفارشات" />
      <div className="m-4 md:m-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {ordersStats.map(
            (stat: {
              id: number;
              icon: IconType;
              amount: string;
              title: string;
              color: string;
            }) => (
              <Stat
                key={stat.id}
                icon={stat.icon}
                amount={stat.amount}
                title={stat.title}
                iconColor={stat.color}
              />
            )
          )}
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              وضعیت توزیع سفارشات
            </h2>
            <OrderDistributionChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              سفارشات روزانه
            </h2>
            <DailyOrderChart />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-6 my-8"
        >
          <OrdersListTable />
        </motion.div>
      </div>
    </div>
  );
};

export default OrdersPage;
