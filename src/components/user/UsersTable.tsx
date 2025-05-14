import { ChangeEvent, useState, useEffect } from "react";
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
          لیست کاربران
        </motion.h2>
        <div className="relative w-full md:w-auto">
          <motion.input
            type="text"
            placeholder="جستجو برای کاربران..."
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
      {filteredUsers.length > 0 ? (
        <div className="overflow-x-auto">
          <motion.table
            className="table table-zebra w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <thead className="bg-base-300 text-base-content text-sm">
              <tr>
                <th className="text-right">کاربر</th>
                <th className="text-right">ایمیل</th>
                <th className="text-right">نقش</th>
                <th className="text-right">وضعیت</th>
                <th className="text-right">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="text-base-content text-sm font-light">
              {filteredUsers.map((user) => (
                <motion.tr
                  key={user.name}
                  className="hover:bg-base-200 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="flex items-center text-right gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {user.firstLetter}
                      </span>
                    </div>
                    <span>{user.name}</span>
                  </td>
                  <td className="text-right">{user.email}</td>
                  <td className="text-right">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full">
                      {user.role}
                    </span>
                  </td>
                  <td className="text-right">
                    <span
                      className={`${
                        user.status === "Active"
                          ? "bg-emerald-600"
                          : "bg-red-600"
                      } text-white px-2 py-1 rounded-full`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleRemoveUser(user.name)}
                      className="btn btn-sm btn-ghost text-emerald-500 hover:text-emerald-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleRemoveUser(user.name)}
                      className="btn btn-sm btn-ghost text-red-500 hover:text-red-700"
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
          className="text-center text-base-content mt-4"
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