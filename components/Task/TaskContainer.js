import { config } from "@/data";
import { getAllTask, setTasks } from "@/src/features/TaskSlice";
import { useSession } from "next-auth/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSwr from "swr";
import CreateTask from "./CreateTask/CreateTask";
import TaskCard from "./TaskCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TaskContainer() {
  const { data: session } = useSession();
  const tasks = useSelector(getAllTask);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useSwr("/api/task", fetcher);

  if (!error) {
    console.log(data);
    dispatch(setTasks(data));
  }

  return (
    <div className="flex flex-col space-y-4">
      {session.user.email == config.admin_email && <CreateTask />}

      {tasks.map((task) => {
        return <TaskCard key={task._id} {...task} />;
      })}
    </div>
  );
}
