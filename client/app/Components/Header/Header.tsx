"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openProfileModal, openModalForAdd, activeTasks } = useTasks();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#000000]">
      <div>
        <h1 className="text-lg font-extrabold text-zinc-400">
          <span role="img" aria-label="wave" >
            
          </span>
          {userId ? `Hello, ${name}!` : "Welcome to Taskito!"}
        </h1>
        <p className="text-sm text-zinc-400">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-[#b9b09f]">
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-[#b9b09f] text-black rounded-[50px]
          hover:bg-[#ece5d3] hover:text-gray-900 transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Add a new Task" : "Login / Register"}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/kalicharm21"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-zinc-400 rounded-full flex items-center justify-center text-lg border-2 border-[#bbbbbb]"
          >
            {github}
          </Link>
          <Link
            href="https://github.com/kalicharm21"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-zinc-400 rounded-full flex items-center justify-center text-lg border-2 border-[#bbbbbb]"
          >
            {moon}
          </Link>
          <button
           onClick={openProfileModal}
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-zinc-400 rounded-full flex items-center justify-center text-lg border-2 border-[#bbbbbb]"
          >
            {profile}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
