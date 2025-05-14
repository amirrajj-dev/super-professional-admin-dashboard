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
    Pending: "bg-yellow-500 text-white",
    Skipped: "bg-blue-500 text-white",
    Delivered: "bg-green-500 text-white",
    Canceled: "bg-red-500 text-white",
  };

  return (
    <motion.div
      className="container mx-auto p-4 bg-base-200 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 flex flex-col gap-4 md:flex-row md:gap-0 items-start md:items-center md:justify-between">
        <motion.h2
          className="text-xl font-semibold text-base-content"
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
            className="input input-bordered input-primary w-full md:w-60"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          />
          <FaSearch className="absolute top-3 left-3 text-base-content text-lg" />
        </div>
      </div>
      {filteredOrders.length > 0 ? (
        <div className="overflow-x-auto">
          <motion.table
            className="table table-zebra w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <thead className="bg-base-300 text-base-content text-sm">
              <tr>
                <th className="text-right">سفارش ID</th>
                <th className="text-right">مشتری</th>
                <th className="text-right">کل</th>
                <th className="text-right">وضعیت</th>
                <th className="text-right">تاریخ خرید</th>
                <th className="text-right">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="text-base-content text-sm font-light">
              {filteredOrders.map((order) => (
                <motion.tr
                  key={order.orderId}
                  className="hover:bg-base-200 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="py-3 px-6 text-right">{order.orderId}</td>
                  <td className="py-3 px-6 text-right">{order.customer}</td>
                  <td className="py-3 px-6 text-right">{order.total}</td>
                  <td className="py-3 px-6 text-right">
                    <span
                      className={`rounded-full px-3 py-1 ${statusClasses[order.status as OrderStatus]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right">{order.dateOfPurchase}</td>
                  <td className="flex items-center justify-center gap-2">
                    <button className="btn btn-sm btn-ghost text-blue-500 hover:text-blue-700">
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
          className="text-center text-base-content mt-4"
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