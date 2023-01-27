import React, { useState } from "react";
import CreateTaskForm from "./CreateTaskForm";

export default function CreateTask() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      <div
        onClick={() => setShowForm((p) => !p)}
        className="border border-dashed p-2 text-center cursor-pointer  "
      >
        {showForm ? "Close Form" : "Create Task"}
      </div>

      {showForm && <CreateTaskForm />}
    </section>
  );
}
