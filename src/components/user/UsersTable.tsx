import  { ChangeEvent, useState, useEffect } from "react";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { users } from "../../db/data";

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const searchUsers = () => {
      if (searchTerm) {
        const filtered = users.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
      } else {
        setFilteredUsers(users);
      }
    };
    searchUsers();
  }, [searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveUser = (userName: string) => {
    const updatedUsers = filteredUsers.filter(
      (user) => user.name.toLowerCase() !== userName.toLowerCase()
    );
    setFilteredUsers(updatedUsers);
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
          لیست کاربران
        </motion.h2>
        <div className="relative w-full md:w-auto">
          <motion.input
            type="text"
            placeholder="جستجو برای کاربران..."
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
      {filteredUsers.length > 0 ? (
        <div className="overflow-x-auto">
          <motion.table
            className="min-w-full border-gray-300 rounded-lg rtl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 uppercase text-sm leading-normal">
              <tr>
                <th className="py-3 px-6 text-right">کاربر</th>
                <th className="py-3 px-6 text-right">ایمیل</th>
                <th className="py-3 px-6 text-right">نقش</th>
                <th className="py-3 px-6 text-right">وضعیت</th>
                <th className="py-3 px-6 text-right">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.name}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="py-3 px-6 text-right whitespace-nowrap flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {user.firstLetter}
                      </span>
                    </div>
                    <span className="font-medium -translate-x-4">
                      {user.name}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-right">{user.email}</td>
                  <td className="py-3 px-6 text-right">
                    <span className="bg-blue-600 rounded p-1">{user.role}</span>
                  </td>
                  <td className={`py-3 px-6 text-right`}>
                    <span
                      className={`${
                        user.status === "Active"
                          ? "bg-emerald-600"
                          : "bg-red-600"
                      } rounded p-1`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="flex items-center justify-center gap-2.5">
                    <button
                      onClick={() => handleRemoveUser(user.name)}
                      className="text-emerald-500 transition-all hover:text-emerald-700 translate-x-9"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleRemoveUser(user.name)}
                      className="text-red-500 transition-all hover:text-red-700 translate-x-9"
                    >
                      <FaTrash />
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
          هیچ کاربری یافت نشد.
        </motion.div>
      )}
    </motion.div>
  );
};

export default UsersTable;
