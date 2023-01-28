import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton } from "@mui/material";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function TaskCard({ title, url, _id }) {
  const [completed, setCompleted] = useState(false);

  const { data: session } = useSession();

  async function setAsCompleted() {
    const req = await axios.post("/api/status", {
      email: session.user.email,
      id: _id,
    });

    console.log(req.data);

    if (!req.data.error) setCompleted(true);
  }

  return (
    <div className="w-full bg-gray-900 py-2 px-4 flex items-center justify-between shadow-lg">
      <a href={url} target="_blank" className="inline-block flex-1 pr-3">
        {title}
      </a>
      <IconButton onClick={setAsCompleted} sx={{ color: "white" }}>
        {completed ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
      </IconButton>
    </div>
  );
}
