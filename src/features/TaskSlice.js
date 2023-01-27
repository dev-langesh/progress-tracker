const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: [],
};

const TaskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    setTasks: (state, action) => {
      state.value = action.payload;
    },

    addTask: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
  },
});

export const { setTasks, addTask } = TaskSlice.actions;

export default TaskSlice.reducer;

export const getAllTask = (state) => state.task.value;
