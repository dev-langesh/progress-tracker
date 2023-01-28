import React, { useEffect, useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Button, IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  completedTasks,
  deleteTask,
  getAllTask,
  markAsCompleted,
} from "@/src/features/TaskSlice";

export default function TaskCard({ title, url, _id }) {
  const [completed, setCompleted] = useState(false);

  const { data: session } = useSession();

  const completed_Tasks = useSelector(completedTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    if (completed_Tasks.includes(_id)) {
      setCompleted(true);
    }
  }, [completed_Tasks, session]);

  async function setAsCompleted() {
    const req = await axios.post("/api/status", {
      email: session.user.email,
      id: _id,
    });

    if (!req.data.error) {
      setCompleted(true);
      dispatch(markAsCompleted(_id));
    }
  }

  async function delete_task() {
    const req = await axios.delete(`/api/task/?id=${_id}`);

    console.log(req.data);

    dispatch(deleteTask(_id));
  }

  return (
    <div className="w-full bg-gray-900 py-2 px-4 flex items-center justify-between shadow-lg">
      <a href={url} target="_blank" className="inline-block flex-1 pr-3">
        {title}
      </a>
      <IconButton onClick={setAsCompleted} sx={{ color: "white" }}>
        {completed ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      </IconButton>
      {/* <Button onClick={delete_task} sx={{ color: "red" }}>
        Delete
      </Button> */}
    </div>
  );
}
