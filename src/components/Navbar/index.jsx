import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/index";

export default () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(true);
  // const navigate = useNavigate();
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [top]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav
        className={`fixed w-full z-30 bg-[#6222CC]  ${
          !top && "mx-auto  xl:px-[30px] fixed top-0 bg-white nav_change"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 ">
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between lg:flex lg:justify-between lg:items-center  xl:justify-between xl:items-center">
              <div className="flex-shrink-0 flex items-center">
                <a
                  href="#"
                  className={`text-[38px] text-[#fff] nav_Logo font-bold  ${
                    !top && "nav_logo"
                  }`}
                >
                  DG<span>ital</span>
                </a>
              </div>
              <div className="hidden lg:block sm:ml-6">
                <div className="flex space-x-4 lg:flex lg:items-center  xl:flex xl:items-center gap-8 text-[18px] text-[#fff] font-[600]">
                  <NavLink
                    to={"/"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/about"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/service"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Service
                  </NavLink>
                  <NavLink
                    to={"/project"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Project
                  </NavLink>
                  <Dropdown />
                  {/* <select
                    name=""
                    id=""
                    className={`bg-[#6222CC] text-[#fff] ${
                      !top && "bg-white text-[#000]"
                    } `}
                  >
                    <option
                      value=""
                      className={` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                        !top && "navlink"
                      } `}
                    >
                      Pages +
                    </option>
                    <option value="">
                      <NavLink
                        onClick={() => navigate("/ourteam")}
                        to="/ourteam"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "active"
                            : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                                !top && "text-[#000]"
                              } `
                        }
                      >
                        Our Team
                      </NavLink>
                    </option>
                    <option
                      value=""
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "active"
                          : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                              !top && "text-[#000]"
                            } `
                      }
                    >
                      <NavLink>Testimonial</NavLink>
                    </option>
                    <option value="">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "active"
                            : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                                !top && "text-[#000]"
                              } `
                        }
                      >
                        404 Page
                      </NavLink>
                    </option>
                  </select> */}
                  <NavLink
                    to={"/contact"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ` text-[#fff]  font-medium hover:text-[#ffbe33] ${
                            !top && "navbar_active"
                          } `
                    }
                  >
                    Contact
                  </NavLink>
                  <button
                    className={`w-[135px] h-[45px] rounded-full bg-[#fff] text-[#111] font-[500] ${
                      !top && "bg-[#fba504] navbtn"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-2 py-2 rounded-md text-base font-medium"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#6222CC] ">
              <NavLink
                to={"/"}
                className="text-[#fff]  capitalize  block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-[#fff]   capitalize block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </NavLink>
              <NavLink
                to={"/service"}
                className="text-[#fff]   capitalize block px-3 py-2 rounded-md text-base font-medium"
              >
                Service
              </NavLink>
              <NavLink
                to={"/project"}
                className="text-[#fff]   capitalize block px-3 py-2 rounded-md text-base font-medium"
              >
                Project
              </NavLink>
              <NavLink
                to={"/page"}
                className="text-[#fff]   capitalize block px-3 py-2 rounded-md text-base font-medium"
              >
                <select name="" id="" className="bg-[#6222CC]">
                  <option value="">Pages +</option>
                  <option value="">Our Team</option>
                  <option value="">Testimonial</option>
                  <option value="">404 Page</option>
                </select>
              </NavLink>
              <NavLink
                to={"/contact"}
                className="text-[#fff]   capitalize block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </NavLink>
              <button className="w-[135px] h-[45px] rounded-full bg-[#fff] text-[#111] font-[500]">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
