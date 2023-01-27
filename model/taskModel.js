import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    title: String,
    url: String,
  },
  {
    collection: "Tasks",
  }
);

export const Task = mongoose.model("task", schema);
