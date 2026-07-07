import React, { useState } from "react";
import { Search, Type, Sun, Moon, Grid3x3, Bell, Menu } from "lucide-react";
import { useTheme } from "../theme-provider.jsx";

export default function AdminNavbar({ onToggleSidebar }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="flex items-center justify-between h-16 px-5 bg-white border-b border-gray-200 sticky top-0 z-30 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <Menu size={20} />
        </button>
        <div className="dark:text-white flex items-center gap-2 w-full px-3 py-2 rounded-lg border border-gray-200 text-gray-400 focus-within:border-violet-400 transition-colors">
          <Search size={17} />
          <input
            placeholder="Search"
            className="w-full text-sm outline-none placeholder:text-gray-400 text-gray-700 dark:text-white"
          />
          <kbd className="text-[11px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 whitespace-nowrap">
            CTRL + K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800 transition-colors"
          title="Toggle theme"
        >
          {isDark ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-white"
          title="Apps"
        >
          <Grid3x3 size={19} />
        </button>
        <button
          className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-white"
          title="Notifications"
        >
          <Bell size={19} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <button className="ml-1 relative dark:text-white">
          <img
            src="https://i.pravatar.cc/64?img=13"
            alt="avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-white dark:bg-green-500 dark:ring-white" />
        </button>
      </div>
    </header>
  );
}
