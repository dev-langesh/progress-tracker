import { addTask } from "@/src/features/TaskSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateTaskForm({ close }) {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ title: "", url: "" }}
      validate={(values) => {
        let error = {};

        if (!values.title) {
          error.title = "Required";
        }
        if (!values.url) {
          error.url = "Required";
        }
        return error;
      }}
      onSubmit={async (values, { resetForm }) => {
        const req = await fetch("/api/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await req.json();

        if (data.task) {
          // console.log(data.task);
          dispatch(addTask(data.task));
          resetForm();

          close(true);
        }
      }}
    >
      {() => {
        return (
          <Form className="flex flex-col space-y-4 p-4 bg-gray-900">
            <div className="w-full">
              <Field
                className="bg-transparent border border-slate-400 text-white w-full placeholder:text-white px-2 py-1 outline-none"
                placeholder="Task name"
                name="title"
              />
              <ErrorMessage
                className="text-sm text-red-500"
                name="title"
                component="p"
              />
            </div>

            <div className="w-full">
              <Field
                className="w-full bg-transparent border border-slate-400 text-white placeholder:text-white px-2 py-1 outline-none"
                name="url"
                placeholder="URL"
              />
              <ErrorMessage
                className="text-sm text-red-500"
                name="url"
                component="div"
              />
            </div>

            <div className="flex justify-center space-x-6">
              <button className="bg-blue-600 py-1 px-2 w-20" type="submit">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
