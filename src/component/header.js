import logo from '../assets/logo.png';
import Navbar from './navbar';
import SearchBar from './search-bar';
import { useState } from 'react';
const Header = (props) => {
  
    return (
      <header className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-md">
        <div className="max-w-screen-xl mx-0 flex justify-between items-center">
            <div className="flex items-center space-x-4"> {/* Added flex and spacing between logo and text */}
              <img src={logo} alt="Logo" height="50px" width="50px"/> {/* Removed w-1 */}
              <h1 className="text-xl font-bold">TaskTrek</h1>
            </div>
            {/* <div className=''> */}
              <button
                  onClick={props.toggleForm}
                  className="absolute right-5 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Create Task
                </button>
            {/* </div> */}
        </div>
      </header>
    );
};

export default Header;
