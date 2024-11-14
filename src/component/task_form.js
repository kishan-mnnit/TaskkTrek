import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reloadpage } from '../features/Render/loadpageSlice';
import { setFormdata } from '../features/Form/FormdataDlice';
import toast, { Toaster } from 'react-hot-toast';
const TaskForm = ({onClose}) => {
  // State for each form field
  const formData = useSelector((state) => state.FormData);
  const [taskName, setTaskName] = useState(formData.taskName);
  const [completionDate, setCompletionDate] = useState(formData.completionDate);
  const [taskStatus, setTaskStatus] = useState(formData.taskStatus || 'Upcoming');
  const [priority, setPriority] = useState(formData.priority || 'low'); // Default to low priority
  const [description, setDescription] = useState(formData.description); // State for description
  const dispatch = useDispatch();
  // Add a new task
  const addTask = (newTask) => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = savedTasks.findIndex(
      (item, index) => item.id === formData.id
    );
    if(taskIndex !== -1){
      savedTasks[taskIndex] = {
        ...savedTasks[taskIndex],
        taskName : newTask.taskName,
        completionDate : newTask.completionDate,
        priority : newTask.priority,
        taskStatus : 'Upcoming',
        description : newTask.description,
      }
    }else{
      savedTasks.push(newTask)
    }
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a task object to simulate task submission
    const task = {
      id: Date.now(),
      taskName,
      completionDate,
      priority,
      taskStatus,
      description,
    };

    console.log('Task Submitted:', task);
    addTask(task);
    // Reset the form
    setTaskName('');
    setCompletionDate('');
    setPriority('low');
    setDescription('');
    dispatch(setFormdata([]))
    dispatch(reloadpage());
    onClose();
    toast.success('Task added Successfully')
  };

  // Handle form close
  const handleClose = () => {
    // Reset the form fields
    setTaskName('');
    setCompletionDate('');
    setPriority('low');
    setDescription('');
    dispatch(setFormdata([]))
    // Call the onClose prop if provided (for closing a modal, for example)
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      <form
        className="bg-white p-6 rounded-lg border-4 border-blue-300 shadow-xl space-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-4">Create Task</h2>

        {/* Task Name */}
        <div>
          <label htmlFor="taskName" className="block text-sm font-medium text-gray-700">
            Task Name
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            maxLength={30}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter task name"
          />
        </div>

        {/* Completion Date */}
        <div>
          <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700">
            Completion Date
          </label>
          <input
            type="date"
            id="completionDate"
            value={completionDate}
            onChange={(e) => setCompletionDate(e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Task Priority */}
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Enter task description"
            className="mt-1 p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-between items-center">
          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Add Task
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
