import { config } from "@/data";
import { completedTasks, getAllTask } from "@/src/features/TaskSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const [progress, setProgress] = useState();

  const completed_tasks = useSelector(completedTasks);
  const tasks = useSelector(getAllTask);

  const { data: session } = useSession();

  useEffect(() => {
    if (tasks.length === 0) {
      setProgress(0);
    } else {
      const percent = Math.round((completed_tasks.length / tasks.length) * 100);

      setProgress(percent);
    }
  }, [completed_tasks, tasks]);

  return (
    <section className="w-full p-4 text-white flex items-center justify-between bg-gray-900">
      <div className="space-y-2 flex-1 pr-3">
        <div
          style={{ width: `${progress}%` }}
          className={`w-[${progress}%] rounded-full px-2 ${
            progress && "bg-blue-700"
          }`}
        >
          <p className="text-sm whitespace-nowrap">
            Progress : <span className="font-bold">{progress}%</span>
          </p>
        </div>
      </div>

      {session.user.email === config.admin_email && (
        <Link
          className="text-sm inline-block  hover:underline"
          href="all-progress"
        >
          <span className="text-sm cursor-pointer bg-white text-black rounded-full py-1 px-2">
            All Progress
          </span>
        </Link>
      )}
    </section>
  );
}
