import { config } from "@/data";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Search from "./search";

export default function Header() {
  const { data: session } = useSession();

  const router = useRouter();

  return (
    <div className="w-full bg-blue-600 p-4 text-white flex justify-between">
      <Link href="/">
        <h1 className="font-bold cursor-pointer">Progress Tracker</h1>
      </Link>

      {session && session.user.email === config.admin_email && <Search />}

      {session ? (
        <div className="flex space-x-4">
          <p>{session.user.name}</p>

          <button
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
