import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

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
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (<div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <img
            className="h-12 w-12 rounded-md cursor-pointer"
            src="https://occ-0-5690-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
