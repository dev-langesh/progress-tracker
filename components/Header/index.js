import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function Header() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="w-full bg-green-500 p-4 text-white flex justify-between">
      <h1>Progress Tracker</h1>

      {session ? (
        <div className="flex space-x-4">
          <p>{session.user.name}</p>

          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
