import { completedTasks, getAllTask } from "@/src/features/TaskSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const [progress, setProgress] = useState();

  const completed_tasks = useSelector(completedTasks);
  const tasks = useSelector(getAllTask);

  useEffect(() => {
    if (tasks.length === 0) {
      setProgress(0);
    } else {
      const percent = Math.round((completed_tasks.length / tasks.length) * 100);

      setProgress(percent);
    }
  }, [completed_tasks, tasks]);

  return (
    <div className="w-full pt-4 text-white space-y-3">
      <p className="text-sm">Progress : {progress}%</p>
      <div
        style={{ width: `${progress}%` }}
        className={`w-[${progress}%] h-2 bg-blue-500`}
      ></div>
    </div>
  );
}
