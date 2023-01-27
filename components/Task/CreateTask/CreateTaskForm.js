import { Field, Form, Formik } from "formik";
import React, { useState } from "react";

export default function CreateTaskForm() {
  return (
    <Formik
      initialValues={{ title: "", url: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => {
        return (
          <Form className="flex flex-col space-y-4 p-4 bg-gray-900">
            <Field
              className="bg-transparent border border-slate-400 text-white placeholder:text-white px-2 py-1 outline-none"
              placeholder="Task name"
              name="title"
            />
            <Field
              className="bg-transparent border border-slate-400 text-white placeholder:text-white px-2 py-1 outline-none"
              name="url"
              placeholder="URL"
            />

            <div className="flex justify-center space-x-6">
              <button className="bg-green-600 py-1 px-2 w-20" type="submit">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
