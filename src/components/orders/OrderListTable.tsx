import { ChangeEvent, useState, useEffect } from "react";
import { FaSearch, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { orders } from "../../db/data";

type OrderStatus = "Pending" | "Skipped" | "Delivered" | "Canceled";

const OrdersListTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    const searchOrders = () => {
      if (searchTerm) {
        const filtered = orders.filter((order) =>
          order.customer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOrders(filtered);
      } else {
        setFilteredOrders(orders);
      }
    };
    searchOrders();
  }, [searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const statusClasses: Record<OrderStatus, string> = {
    Pending: "bg-yellow-500",
    Skipped: "bg-blue-500",
    Delivered: "bg-green-500",
    Canceled: "bg-red-500",
  };

  return (
    <motion.div
      className="container mx-auto p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:gap-0 items-start md:items-center md:justify-between">
        <motion.h2
          className="text-white font-dana-demi text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          لیست سفارشات
        </motion.h2>
        <div className="relative w-full md:w-auto">
          <motion.input
            type="text"
            placeholder="جستجو برای سفارشات..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 pr-10 w-full md:w-60 bg-gradient-to-r from-gray-900 via-gray-800 to-slate-700 text-white placeholder:text-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          />
          <FaSearch className="absolute top-3 left-3 text-white text-lg" />
        </div>
      </div>
      {filteredOrders.length > 0 ? (
        <div className="overflow-x-auto">
          <motion.table
            className="min-w-full border-gray-300 rounded-lg rtl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-right">سفارش ID</th>
                <th className="py-3 px-6 text-right">مشتری</th>
                <th className="py-3 px-6 text-right">کل</th>
                <th className="py-3 px-6 text-right">وضعیت</th>
                <th className="py-3 px-6 text-right">تاریخ خرید</th>
                <th className="py-3 px-6 text-right">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
              {filteredOrders.map((order) => (
                <motion.tr
                  key={order.orderId}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="py-3 px-6 text-right">{order.orderId}</td>
                  <td className="py-3 px-6 text-right">{order.customer}</td>
                  <td className="py-3 px-6 text-right">{order.total}</td>
                  <td className="py-3 px-6 text-right">
                    <span
                      className={`rounded p-1 ${statusClasses[order.status as OrderStatus]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right">{order.dateOfPurchase}</td>
                  <td className="flex items-center justify-center gap-2.5">
                    <button className="text-blue-500 transition-all text-lg translate-x-9 translate-y-3 hover:text-blue-700">
                      <FaEye />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      ) : (
        <motion.div
          className="text-white text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          هیچ سفارشی یافت نشد.
        </motion.div>
      )}
    </motion.div>
  );
};

export default OrdersListTable;