import React from "react";
import Logo from "../assets/images/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/product-list",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/product-list",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/product-list",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/product-list",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/product-list",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/product-list",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/product-list",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/product-list",
  },
];

const Header = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="/product-list"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Mobile First Applications E-commerce
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="/product-list"
              className="flex items-center gap-[2px] py-2"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
