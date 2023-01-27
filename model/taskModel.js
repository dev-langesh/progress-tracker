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

export const Task = mongoose.models.task || mongoose.model("task", schema);
