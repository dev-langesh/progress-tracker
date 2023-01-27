const { configureStore } = require("@reduxjs/toolkit");
const { default: TaskSlice } = require("../features/TaskSlice");

export const store = configureStore({
  reducer: {
    task: TaskSlice,
  },
});
