import { config } from "@/data";
import { useSession } from "next-auth/react";
import React from "react";
import CreateTask from "./CreateTask/CreateTask";

export default function TaskContainer() {
  const { data: session } = useSession();

  console.log(process.env.NEXT_PUBLIC_ADMIN_EMAIL);

  return (
    <div className="flex flex-col">
      {session.user.email == config.admin_email && <CreateTask />}
    </div>
  );
}
