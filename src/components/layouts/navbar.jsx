import React, { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"
import { Counter } from "../../redux/features/counter/Counter"
import '../styles/navbar.css'
import { useDispatch } from 'react-redux'
import { setAllState } from '../../redux/features/Middleware/middlewareSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const [toggleMenu, setToggleMenu] = useState(false)
  async function handleSignout() {
    const setMiddleware = {
        accessToken: "",
        refreshToken: "",
        statusLogin: false
    }
    await Swal.fire({
      icon: 'success',
      title: 'logout success.',
      showConfirmButton: false,
      timer: 1000
    })
    dispatch(setAllState(setMiddleware))
  }
  
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Counter />
                <NavLink
                  to="/"
                  className={({isActive}) => isActive?"bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to={{ pathname: "/aboutus" }}
                  className={({isActive}) => isActive?"bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  AboutUs
                </NavLink>
                <NavLink
                  to="/services"
                  className={({isActive}) => isActive?"bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/Content"
                  className={({isActive}) => isActive?"bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  Contents
                </NavLink>
                <NavLink
                  to="/parallax"
                  className={({isActive}) => isActive?"bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  :"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                >
                  parallax
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
              </button>
              <div className="ml-3 relative">
                  <button
                    type="button"
                    className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                  <div className={`origin-top-right absolute h-60 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" ${(toggleMenu)?"dropdown-menu active":"dropdown-menu"} `} role="menu" aria-labelledby="user-menu-button">
                    <div className="py-1" role="none">
                      <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</Link>
                      <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</Link>
                      <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</Link>
                      <button type="button" onClick={handleSignout} className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem">Sign out</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Counter />
          <Link
            to="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            to={{ pathname: "/aboutus" }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            AboutUs
          </Link>
          <Link
            to="/services"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </Link>
          <Link
            to="/Content"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contents
          </Link>
          <Link
            to="/parallax"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            parallax
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">
                Tom Cook
              </div>
              <div className="text-sm font-medium leading-none text-gray-400">
                tom@example.com
              </div>
            </div>
            <button
              type="button"
              className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
