import { IconType } from "react-icons";
import AnalyticStat from "../components/analytics/analyticStat";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import { analyticsData } from "../db/data";
import RevenueVsTargetChart from "../components/analytics/RevenueVsTargetCart";
import ProductPerformanceChart from "../components/analytics/ProductPerformanceChart";
import ChannelPerformanceChart from "../components/analytics/ChannelPerformanceChart";
import UserRetentionChart from "../components/analytics/UserRententionChart";
import CustomerSegmentationChart from "../components/analytics/CustomerSegmentationChart";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";

const AnalyticsPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="آنالیز ها" />
      <div className="m-4 md:m-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {analyticsData.map(
            (stat: {
              id: number;
              icon: IconType;
              amount: string;
              title: string;
              color: string;
              growthAmount: string;
              isGrowing: boolean;
            }) => (
              <AnalyticStat
                key={stat.id}
                icon={stat.icon}
                amount={stat.amount}
                title={stat.title}
                iconColor={stat.color}
                growthAmount={stat.growthAmount}
                isGrowing={stat.isGrowing}
              />
            )
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-6 my-8"
        >
          <h2 className="text-white font-dana-demi text-2xl m-4">
            نمای کلی فروش
          </h2>
          <RevenueVsTargetChart />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] my-6 md:my-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              عملکرد محصولات
            </h2>
            <ProductPerformanceChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              عملکرد کانال
            </h2>
            <ChannelPerformanceChart />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] my-6 md:my-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              بخش فروشنده
            </h2>
            <CustomerSegmentationChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              رضایت کاربران
            </h2>
            <UserRetentionChart />
          </motion.div>
        </div>
        <div className="mt-6 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg">
          <h2 className="text-2xl font-dana-demi text-white mb-6">
            آنالیز انجام شده توسط هوش مصنوعی
          </h2>
          <ul className="space-y-6">
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-white">
              <FaArrowTrendUp className=" text-violet-500 text-xl  sm:text-lg" />
              <span>
                درآمد 15 % نسبت به ماه قبل افزایش داشته است که دلیل اصلی آن
                کمپینی است که از طریق ایمیل به راه انداختید.
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-white">
              <FiUsers className=" text-blue-500 text-xl  sm:text-lg" />
              <span>
                رضایت کاربران به مقدار 8 % افزایش داشته است که دلیل اصلی آن لانچ
                برنامه جدید است.
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-white">
              <FiShoppingBag className=" text-yellow-500 text-xl  sm:text-lg" />
              <span>
                در دسته بندی محصولات "لپ تاپ" بیشترین پتاسنل رشد را با توجه به
                روند بازار داشته است.
              </span>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-3 sm:gap-2 text-white">
              <FiDollarSign className=" text-rose-500 text-xl  sm:text-lg" />
              <span>
                بهینه سازی استراتژی قیمت به احتمال ریاد میتواند میزان سود
                دریافتی شما را تا 5 الی 7 درضد افزایش بدهد.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
