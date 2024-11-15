
# Technical Questions and Answers

### 1. **How long did you spend on the coding test?**
   - I spent approximately **18 hours** on the coding test. This time allowed me to fully understand each problem, plan efficient solutions, and debug carefully. My focus was on ensuring that the code was optimal and aligned with best practices, reflecting the depth of work needed to address each requirement thoroughly.

### 2. **What was the most useful feature added to the latest version of your chosen language?**
   - In this project, I leveraged **Redux**, a state management library that simplifies managing and centralizing the application's state. By using Redux, I improved the predictability and traceability of the application's data flow, making it easier to handle complex state transitions and updates across components.

   **Example Usage of Redux in TaskkTrek:**
   ```javascript
   import { createSlice } from "@reduxjs/toolkit";

export const filterKeySlice = createSlice({
  name: "filterkey",
  initialState: "All",
  reducers: {
    setfilterkey: (state, action) => {
      // Directly mutate the state without returning anything
      return action.payload;  // No need to return the state, just mutate it directly
    },
  },
});

export const { setfilterkey } = filterKeySlice.actions;
export default filterKeySlice.reducer;
   ```
   - Using Redux allows centralized management of tasks, making actions like adding or deleting tasks efficient and cleanly handled.

### 3. **How would you track down a performance issue in production? Have you ever had to do this?**
   - To address performance issues in production, I would follow a structured approach:
     - **Monitoring and Logs**: Implement real-time monitoring and use logging tools (e.g., Sentry, New Relic) to identify bottlenecks.
     - **Profiling**: Utilize browser developer tools and React DevTools to profile components and track resource consumption.
     - **Performance Audits**: Run Lighthouse audits and check network requests to optimize the loading speed and resource handling.
     - **Optimization**: Based on findings, I would refactor inefficient code, optimize asset delivery, and minimize unnecessary renders.
   
   - These steps help ensure smooth performance and responsiveness, especially as data or users increase.

### 4. **If you had more time, what additional features or improvements would you consider adding to the task management application?**
   - With additional time, I would consider adding:
     - **Reminders**: Implement scheduled reminders for tasks to help users stay on track.
     - **Calendar Integration**: Integrate with Google Calendar to allow tasks to sync with external calendars.
     - **User Authentication**: Add login and signup features for multi-user functionality.
     - **Automated Task Management**: Set up automated status updates to mark overdue tasks or discard them if needed.

   - These enhancements would make TaskkTrek more user-friendly and versatile for personal and collaborative task management.

---
