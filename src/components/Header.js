import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, PROFILE_LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const logOut = () => {
    dispatch(removeUser());
    navigate("/");
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && (<div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <img
            className="h-12 w-12 rounded-md cursor-pointer"
            src={PROFILE_LOGO}
            alt="profile"
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg border border-gray-700 z-50 cursor-pointer">
            <ul className="py-1">
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-800">
                  Profile
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-800">
                  Settings
                </button>
              </li>
              <li>
                <button onClick={logOut} className="w-full text-left px-4 py-2 hover:bg-gray-800">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>)}
    </div>
  );
}

export default Header
