import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, PROFILE_LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import GptSearch from './GptSearch';

const Header = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="relative flex text-left" ref={dropdownRef}>
         
         <div className='flex gap-4'>
         { showGptSearch ? <GptSearch /> : (
             <button className="px-2 py-4 m-2 text-white" aria-label="Search" onClick={handleGptSearchClick}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               role="img"
               viewBox="0 0 24 24"
               width="24"
               height="24"
               data-icon="MagnifyingGlassStandard"
               aria-hidden="true"
               className="search-icon"
             >
               <path
                 fillRule="evenodd"
                 clipRule="evenodd"
                 d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                 fill="currentColor"
               ></path>
             </svg>
           </button>
          )}
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
         </div>

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
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header
