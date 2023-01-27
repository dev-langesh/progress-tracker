import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton } from "@mui/material";

export default function TaskCard({ title, url }) {
  return (
    <div className="w-full bg-gray-900 py-2 px-4 flex items-center justify-between shadow-lg">
      <a href={url} target="_blank" className="inline-block flex-1 pr-3">
        {title}
      </a>
      <IconButton sx={{ color: "white" }}>
        <ThumbUpOffAltIcon />
      </IconButton>
    </div>
  );
}
