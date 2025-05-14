import { ChangeEvent, useState, useEffect } from "react";
import { products } from "../../db/data";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const searchProducts = () => {
      if (searchTerm) {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    };
    searchProducts();
  }, [searchTerm]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveProduct = (productName: string) => {
    const updatedProducts = filteredProducts.filter(
      (product) => product.name.toLowerCase() !== productName.toLowerCase()
    );
    setFilteredProducts(updatedProducts);
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
          لیست محصولات
        </motion.h2>
        <div className="relative w-full md:w-auto">
          <motion.input
            type="text"
            placeholder="جستجو برای محصولات..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 pr-10 w-full md:w-60 input input-bordered input-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          />
          <FaSearch className="absolute top-3 left-3 text-base-content text-lg" />
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="overflow-x-auto">
          <motion.table
            className="table table-zebra w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <thead className="bg-base-300 text-base-content text-sm">
              <tr>
                <th className="text-right">محصول</th>
                <th className="text-right">دسته‌بندی</th>
                <th className="text-right">قیمت</th>
                <th className="text-right">موجودی</th>
                <th className="text-right">فروش</th>
                <th className="text-right">عملیات ها</th>
              </tr>
            </thead>
            <tbody className="text-base-content text-sm font-light">
              {filteredProducts.map((product) => (
                <motion.tr
                  key={product.name}
                  className="hover:bg-base-300 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="flex items-center text-right">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="text-right">{product.category}</td>
                  <td className="text-right">${product.price.toFixed(2)}</td>
                  <td className="text-right">{product.stock}</td>
                  <td className="text-right">{product.sales}</td>
                  <td className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => handleRemoveProduct(product.name)}
                      className="btn btn-sm btn-ghost text-emerald-500 hover:text-emerald-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleRemoveProduct(product.name)}
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
          هیچ محصولی یافت نشد.
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProductsTable;