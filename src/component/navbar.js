import { useState } from "react";
import SearchBar from "./search-bar.js";

import { setfilterkey } from "../features/Filters/filterKeySlice.js";
import { useDispatch } from "react-redux";

const Navbar = (props) => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const [filteredTasks, setFilteredTasks] = useState(props.tasks);
    
    // Function to handle search and filter tasks
    const handleSearch = () => {
        const result = props.tasks.filter(task =>
        task.taskName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredTasks(result);
    };
    const handleUpcoming = (e) => {
        console.log("add",e.target.value)
        dispatch(setfilterkey(e.target.value))
    }
    const handleAll = (e) => {
        dispatch(setfilterkey(e.target.value))
    }
    const handleCompleted = (e) => {
        dispatch(setfilterkey(e.target.value))
    }
    const handleDue = (e) => {
        dispatch(setfilterkey(e.target.value))
    }
    return (
        <>
            <nav className="fixed top-0 w-full pt-1 pb-1 mt-20 mb-4 bg-white">
                <div className='justify-content-center flex-grow'>
                    <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch}/>
                    <center className='mt-2'>
                        <button className='px-6 mx-2 bg-gray-100 hover:bg-blue-200 rounded-lg  shadow-lg p-1 w-28'
                            onClick={handleAll} value="All"
                        >All <span className="text-red-500 text-sm relative top-[-0.3rem]">{props.tasks?.length}</span></button>
                        <button className='px-6 mx-2 bg-gray-100 hover:bg-blue-200 rounded-lg cursor-pointer shadow-lg p-1 w-28'
                            onClick={handleUpcoming} value="Upcoming"
                        >Upcoming</button>
                        <button className='px-6 mx-2 bg-gray-100 hover:bg-blue-200 rounded-lg  shadow-lg p-1 w-28'
                            onClick={handleCompleted} value="Completed"
                        >Completed</button>
                        <button className='px-6 mx-2 bg-gray-100 hover:bg-blue-200 rounded-lg  shadow-lg p-1 w-28'
                            onClick={handleDue} value="Due"
                        >Due</button>
                    </center>
                </div>
            </nav>
        </>
    );
}

export default Navbar;