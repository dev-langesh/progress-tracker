const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: {
    tasks: [],
    completed: [],
  },
};

const TaskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    setTasks: (state, action) => {
      state.value.tasks = action.payload;
    },

    addTask: (state, action) => {
      state.value.tasks.unshift(action.payload);
    },

    deleteTask: (state, action) => {
      state.value.tasks = state.value.tasks.filter((task) => {
        return task != action.payload;
      });
    },

    setCompleted: (state, action) => {
      state.value.completed = action.payload;
    },

    markAsCompleted: (state, action) => {
      state.value.completed.push(action.payload);
    },
  },
});

export const { setTasks, addTask, setCompleted, markAsCompleted, deleteTask } =
  TaskSlice.actions;

export default TaskSlice.reducer;

export const getAllTask = (state) => state.task.value.tasks;

export const completedTasks = (state) => state.task.value.completed;
