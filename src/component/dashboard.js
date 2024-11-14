import react from 'react';
import TaskForm from './task_form';
import { useState, useEffect} from 'react';
import AllTask from './all-task';
import SearchBar from './search-bar';
import Navbar from './navbar';
function Dashboard(props){
    
    return (
        <>
            <div className={`mt-20 ${props.isFormVisible ? "opacity-30" : "opacity-100"}`}>
                <Navbar/>
            </div>
            <div className="mt-5">
                <div className={`${props.isFormVisible ? "opacity-30" : "opacity-100"}`}>
                    <AllTask className="justify-center" toggleForm={props.toggleForm}/>
                </div>
                {/* Conditionally render TaskForm based on isFormVisible */}
                <div className={`fixed top-1/4 left-0 w-full`}
                    style={{
                        zIndex: 1000,
                    }}>
                    {props.isFormVisible && <TaskForm onClose={props.toggleForm}/>}
                </div>
            </div>
        </>
    );
};

export default Dashboard;