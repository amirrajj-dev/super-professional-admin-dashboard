import Header from "../components/common/Header.tsx";
import Stat from "../components/common/Stat.tsx";
import { motion } from "framer-motion";
import ProductsTable from "../components/products/ProductsTable";
import SaleChart from "../components/overview/SaleChart";
import CategoryChart from "../components/common/CategoryChart";
import { ProductStats } from "../db/data.ts";
import { IconType } from "react-icons";

const ProductsPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="محصولات" />
      <div className="m-4 md:m-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {ProductStats.map(
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
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-6 my-8"
        >
          <ProductsTable />
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              توزیع دسته بندی
            </h2>
            <CategoryChart />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 h-[450px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-sm rounded-lg"
          >
            <h2 className="text-white font-dana-demi text-2xl m-4">
              روند فروش
            </h2>
            <SaleChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
