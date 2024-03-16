import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const truncate = (str) => {
  return str.length > 10 ? str.substring(0, 10) + "..." : str;
};

const ProductList = ({ products }) => {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>

        <div>
          <div className="flex justify-end items-center ">
            <input
              type="text"
              placeholder="Search products..."
              className="block w-[30%] px-4 py-2 mb-4 border border-gray-300 rounded-md"
              value={filter}
              onChange={handleFilterChange}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 mt-5">
            {currentProducts.map(({ id, image, title, category, price }) => {
              return (
                <div
                  className="max-w-sm rounded overflow-hidden shadow-lg"
                  key={id}
                >
                  <img className="w-40" src={image} alt={title} />
                  <div className="px-6 py-4">
                    <Link to={`/product-list/${id}`}>
                      <div className="font-bold text-xl mb-2">
                        {truncate(title)}
                      </div>
                    </Link>

                    <p className="text-gray-700 text-base">{category}</p>
                    <p className="text-gray-700 text-base">${price}</p>
                  </div>

                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-5">
            <Pagination
              current={currentPage}
              pageSize={ITEMS_PER_PAGE}
              total={filteredProducts.length}
              onChange={handlePageChange}
              showPrevNextJumpers
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
