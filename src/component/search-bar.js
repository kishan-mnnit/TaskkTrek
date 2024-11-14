import React, { useState } from "react";
import SearchIcon from '../assets/search.png';
import { setSearchkey } from "../features/Filters/searchbarSlice.js";
import { useDispatch } from "react-redux";
const SearchBar = () => {
    const dispatch = useDispatch()
    const [query ,setquery]=useState("");
    return (
        <div className="flex items-center p-0 bg-white border border-gray-300 rounded-lg shadow-sm max-w-3xl mx-auto">
        <input
            type="text"
            placeholder="Search tasks name..."
            value={query}
            onChange={(e) => {setquery(e.target.value); dispatch(setSearchkey(e.target.value))}}
            className="w-full p-2 text-sm text-gray-700 border-none outline-none"
        />
        {/* <button
            onClick={onSearch}
            className="ml-3 px-4 py-0 text-black bg-transperant rounded-lg"
        >
            <img src={SearchIcon} height="25px" width="25px"/>
        </button> */}
        </div>
    );
};

export default SearchBar;