import Header from "../components/common/Header";
import { userStats } from "../db/data";
import { motion } from "framer-motion";
import Stat from "../components/common/Stat";
import UsersTable from "../components/user/UsersTable";
import UserActivityChart from "../components/user/UserActivityChart";
import UserGrowthChart from "../components/user/UserGrowthChart";
import UserDemoChart from "../components/user/UserDemoChart";

const UsersPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="کاربران" />
      <div className="m-4 md:m-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {userStats.map((stat, index) => (
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
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-6 my-8"
        >
          <UsersTable />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              هیتمپ فعالیت کاربران
            </h2>
            <UserActivityChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] my-6 md:my-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              افزایش کاربر
            </h2>
            <UserGrowthChart />
          </motion.div>
        </div>
        <div className="mt-2 md:mt-8 sm:mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-4">
          <h2 className="text-white font-dana-demi text-2xl m-4">
            دموگرافیک کاربران
          </h2>
          <UserDemoChart />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
