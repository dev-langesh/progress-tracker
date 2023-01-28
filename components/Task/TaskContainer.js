import { config } from "@/data";
import { getAllTask, setTasks } from "@/src/features/TaskSlice";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "./CreateTask/CreateTask";
import TaskCard from "./TaskCard";
import axios from "axios";

export default function TaskContainer() {
  const { data: session } = useSession();
  const tasks = useSelector(getAllTask);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const req = await axios.get("/api/task");

      const data = req.data;

      if (!req.data.error) {
        dispatch(setTasks(data));
      }
    }

    getData();
  }, []);

  return (
    <div className="flex flex-col space-y-4">
      {session.user.email == config.admin_email && <CreateTask />}

      {tasks.map((task) => {
        return <TaskCard key={task._id} {...task} />;
      })}
    </div>
  );
}
