import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import Delcon from '../assets/delcon.png'
import Editcon from '../assets/editcon.png'
import { useSelector,useDispatch } from "react-redux";
import { reloadpage } from "../features/Render/loadpageSlice";
import { setSearchkey } from "../features/Filters/searchbarSlice";
import { setfilterkey } from "../features/Filters/filterKeySlice";
import { setFormdata } from "../features/Form/FormdataDlice";
const AllTask = (props) => {
    const dispatch = useDispatch()
    // State to track the id of the task whose description is visible
    const load = useSelector((state)=>state.load)
    const searchKey = useSelector((state)=>state.searchkey)
    const FilterKey = useSelector((state)=>state.filterkey)
    console.log({searchKey,FilterKey})
    const [TaskData, setTaskData]=useState([]);
    const [visibleTaskId, setVisibleTaskId] = useState(null);
    const divStyle = {
        height:'65vh',
        overflow: 'auto', // Allow scrolling
        scrollbarWidth: 'none', // Firefox: Hide scrollbar
        '-ms-overflow-style': 'none', // IE/Edge: Hide scrollbar
    };
    // Function to toggle the visibility of the task description
    const toggleVisibility = (id) => {
        setVisibleTaskId(visibleTaskId === id ? null : id); // Toggle visibility
    };
    // Delete a task by id
    const deleteTask = (id) => {
        console.log(id);
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const filtered = savedTasks.filter((items)=> items.id!==id)
        console.log(filtered)
        localStorage.setItem('tasks', JSON.stringify(filtered));
        dispatch(reloadpage())
        toast.success('Task Deleted Successfully')

        // dispatch(setSearchkey(""))
        // dispatch(setfilterkey(""))
    };
    // Update task satatus
    const updateTaskStatus = (taskId, newStatus) => {
        try {
            // Fetch the saved tasks from localStorage or default to an empty array
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            
            // Update the task status if the task is found
            const updatedData = savedTasks.map(task =>
                task.id === taskId ? { ...task, taskStatus: newStatus } : task
            );
    
            // Save the updated tasks back to localStorage
            localStorage.setItem('tasks', JSON.stringify(updatedData));
    
            // Update the local state (presumably React state)
            setTaskData(updatedData);
    
            // Dispatch actions: reload page, reset search key, and reset filter key
            dispatch(reloadpage());   // Consider if this triggers a full page reload
            dispatch(setSearchkey(""));
            dispatch(setfilterkey());
    
        } catch (error) {
            console.error("Error updating task status:", error);
            // Optionally, you could dispatch an error action or handle it in the UI
        }
    };
    
    const EditTask = (data)=>{
        dispatch(setFormdata(data));
        props.toggleForm();
    }
    useEffect(()=>{
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const filtered = savedTasks.filter((items)=> {
            return (items.taskName.toLowerCase().includes(searchKey.toLowerCase()) ||
            items.description.toLowerCase().includes(searchKey.toLowerCase()))
            return true
    });
    let filtered2=filtered;
    if(FilterKey!=='All'){
        filtered2 = filtered.filter((items)=> {
        return (items.taskStatus.toLowerCase().includes(FilterKey.toLowerCase()) )
        return true
});
    }
    //set due funtion
    
    setTaskData(filtered2);
    },[searchKey,FilterKey,load])
return (
    <center>
        <center className='flex flex-row w-5/6 space-y-0 py-4 shadow-lg bg-blue-400 mt-20 rounded-lg'>
            <div className='w-2/5 px-7 ml-24'
            
            >Name</div>
            <div className='w-2/5 px-7'
            
            ></div>
            <div className='w-5/6 px-7'
            
            >Completion Date</div>
            <div className='flex flex-row'>
                <div className='w-2/5 px-14'
                
                >Priority</div>
                <div className='w-2/5 px-14'
                
                >Status</div>
            </div>
            
            <div className='w-2/5 px-7 ml-5'
            
            >Action</div>
        </center>
      {/* Flexbox container */}
        <div style={divStyle} className="w-5/6 scrollbar-hide overflow-auto space-x-0 py-0 mt-0" >
        {TaskData.sort((a, b) => {
            // Convert dueDate to Date objects for comparison
            const dateA = new Date(a.completionDate);
            const dateB = new Date(b.completionDate);

            // Compare due dates
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;

            // If due dates are the same, sort by priority
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
            }).map((task) => (
                    <div className={`flex flex-row h-auto space-x-2 my-1 py-5 rounded-lg  shadow-lg text-sm font-medium ${
                        task.taskStatus === "Completed"
                        ? "bg-green-200 hover:bg-green-100"
                        : task.taskStatus === "Upcoming"
                        ? "bg-white-50 hover:bg-gray-100"
                        : task.taskStatus === "Due"
                        ? "bg-red-500 hover:bg-red-400"
                        : "bg-red-500 hover:bg-blue-400"
                    }`}> 
                    
                    <div className="w-4/5 text-[8px] sm:text-[8px] md:text-[10px] lg:text-[15px] xl:text-[18px]">{task.taskName}
                        <button
                                onClick={() => toggleVisibility(task.id)} // Pass task id to toggle visibility
                                className={`px-4 py-2 bg-none text-black text-sm rounded transition ${visibleTaskId === task.id ? "rotate-180" : "rotate-0"}`}
                            >
                                {/* {visibleTaskId === task.id ? "^" : "▼"} */}▼
                            </button>

                            {/* Content that will be toggled */}
                            <div
                                className={`text-sm mt-4 transition-all ${
                                    visibleTaskId === task.id ? "block" : "hidden"
                                }`}
                            >{task.description}</div>
                        
                    </div>

                        
                        <div className="w-4/5">{task.completionDate}</div>


                            <div className={`text-sm font-medium ${
                                task.priority === "high"
                                ? "text-red-500"
                                : task.priority === "medium"
                                ? "text-yellow-500"
                                : "text-green-500"
                            }`} >Priority {task.priority}</div>

                            {/* Task Status */}
                            <div className="w-2/5 text-sm font-medium">
                                <select
                                    value={task.taskStatus}
                                    onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                                    className="text-sm p-0 rounded-md bg-transparent"
                                    >
                                    <option value="Upcoming">Upcoming</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Due">Due</option>
                                </select>
                            {/* {task.taskStatus} */}
                            </div>




                        {/* Buttons: Edit & Delete */}
                        <div className="w-2/5">
                            <button className="text-blue-500 hover:text-blue-700 text-sm px-5"
                                onClick={() => EditTask(task)}
                            >
                                <img src={Editcon} height="18px" width="18px"/></button>
                            <button className="text-red-500 hover:text-red-700 text-sm"
                                onClick={() => deleteTask(task.id)}
                            >
                            <img src={Delcon} height="12px" width="12px"/></button>
                        </div>
                    </div>
                ))}
        </div>
    </center>
    );
};

export default AllTask;
