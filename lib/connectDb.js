import { config } from "@/data";
import mongoose from "mongoose";

export async function connectDb() {
  const uri = config.uri;

  const cached = global.db;

  console.log(cached);

  if (cached) {
    console.log("cached connection is returned");
    return cached;
  } else {
    const conn = mongoose.connect(uri, () => {
      console.log("connection established");
    });

    global.db = conn;

    return global.db;
  }
}
