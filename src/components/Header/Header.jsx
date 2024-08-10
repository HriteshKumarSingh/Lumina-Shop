import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          
          <Link
            to="/"
            className="text-3xl font-bold tracking-wider text-gray-900"
          >
            LuminaShop
          </Link>


          <ul className="hidden md:flex gap-8 text-lg font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "font-bold text-gray-500" : "text-black"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/electronics"
                className={({ isActive }) =>
                  `${isActive ? "font-bold text-gray-500" : "text-black"}`
                }
              >
                Electronics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jewellery"
                className={({ isActive }) =>
                  `${isActive ? "font-bold text-gray-500" : "text-black"}`
                }
              >
                Jewellery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  `${isActive ? "font-bold text-gray-500" : "text-black"}`
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  `${isActive ? "font-bold text-gray-500" : "text-black"}`
                }
              >
                Women
              </NavLink>
            </li>
          </ul>

          
          <Link
            to="/cart"
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-semibold text-lg md:text-xl shadow-md"
          >
            <FaCartPlus className="text-xl md:text-2xl" />
            Cart
          </Link>

          
          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-4xl cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <FiMenu
                className="text-4xl cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "font-bold text-gray-500" : "text-black"}`
                  }
                  onClick={handleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/electronics"
                  className={({ isActive }) =>
                    `${isActive ? "font-bold text-gray-500" : "text-black"}`
                  }
                  onClick={handleMenu}
                >
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jewellery"
                  className={({ isActive }) =>
                    `${isActive ? "font-bold text-gray-500" : "text-black"}`
                  }
                  onClick={handleMenu}
                >
                  Jewellery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/men"
                  className={({ isActive }) =>
                    `${isActive ? "font-bold text-gray-500" : "text-black"}`
                  }
                  onClick={handleMenu}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/women"
                  className={({ isActive }) =>
                    `${isActive ? "font-bold text-gray-500" : "text-black"}`
                  }
                  onClick={handleMenu}
                >
                  Women
                </NavLink>
              </li>
            </ul>
            <Link
              to="/cart"
              className="flex md:hidden items-center gap-2 bg-blue-600 hover:bg-blue-700 my-4 px-4 py-2 w-28 rounded-md text-white font-semibold text-lg md:text-xl shadow-md"
            >
              <FaCartPlus className="text-2xl" />
              Cart
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;