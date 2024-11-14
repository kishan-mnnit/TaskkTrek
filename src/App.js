import './App.css';
import { useState , useEffect} from 'react';
import Dashboard from './component/dashboard';
import Header from './component/header';
import Footer from './component/footer';
import Navbar from './component/navbar';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // change task due status each minute
  // const checkAndUpdateTaskStatus = () => {
  //   const today = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format

  //   // Check each task's completion date
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) => {
  //       // If the completion date is in the past, change the status to "Due"
  //       if (task.taskStatus !== "Completed" && task.completionDate < today) {
  //         return { ...task, taskStatus: "Due" };
  //       }
  //       return task;
  //     })
  //   );
  // };
  // Sorting function
  // const sortTasks = (tasksList) => {
  //   return tasksList.sort((a, b) => {
  //     const dateA = new Date(a.completionDate);
  //     const dateB = new Date(b.completionDate);
  //     return dateA - dateB; // Ascending order
  //   });
  // };

  // useEffect(() => {
  //   setTasks((prevTasks) => sortTasks([...prevTasks]));
  // }, [tasks]); // Whenever tasks or sortOrder changes, sort them

  // Load tasks from localStorage when the component mounts
  // useEffect(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  //   setTasks(savedTasks);
  // }, []);

  // Save tasks to localStorage whenever the tasks state changes
  // useEffect(() => {
  //   if (tasks.length > 0) {
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  //   }
  // }, [tasks]);
    // Toggle form visibility
    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };
  return (
    <>
      <div className="h-screen flex flex-col">
        {/* <Navbar tesks={tasks}/> */}
        <Header isFormVisible={isFormVisible} toggleForm={toggleForm}/>
        <Dashboard isFormVisible={isFormVisible} toggleForm={toggleForm}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
