import { config } from "@/data";
import { completedTasks, getAllTask } from "@/src/features/TaskSlice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function UserProgressCard({
  name,
  email,
  taskCount,
  completed,
}) {
  const [progress, setProgress] = useState();

  useEffect(() => {
    if (taskCount === 0) {
      setProgress(0);
    } else {
      const percent = Math.round((completed.length / taskCount) * 100);

      setProgress(percent);
    }
  }, [taskCount, completed]);

  return (
    <section className="w-full p-4 text-white flex items-center justify-between bg-gray-900">
      <div className="space-y-2 flex-1 pr-3">
        <div
          style={{ width: `${progress}%` }}
          className={`w-[${progress}%] rounded-full px-2 py-[1px] ${
            progress && "bg-blue-700"
          }`}
        >
          <p className="text-sm whitespace-nowrap">
            Progress : <span className="font-bold">{progress}%</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between text-sm">
        <span>{name}</span>
        <span className="text-slate-500">{email}</span>
      </div>
    </section>
  );
}
