import React from "react";

export default function Search() {
  return (
    <form action="/all-progress/">
      <input
        placeholder="Search User"
        name="email"
        className="bg-transparent border text-sm px-2 py-[2px] placeholder:text-sm placeholder:text-white outline-none "
      />
    </form>
  );
}
