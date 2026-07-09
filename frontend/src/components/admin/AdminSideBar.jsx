import React, { useState } from "react";
import { NAV_SECTIONS } from "../../services/adminSideBarItems";
import { Circle, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdminSideBar({ open = true, onCloseMobile }) {
  // "pinned" = le rond violet en haut : épinglé -> sidebar reste ouverte.
  // dépinglé -> se réduit en icônes et s'ouvre au survol de la souris.
  const [activeItem, setActiveItem] = useState(null);
  const [pinned, setPinned] = useState(true);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const expanded = pinned || hovered;

  const handleMouseEnter = () => {
    if (!pinned) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!pinned) setHovered(false);
  };

  const togglePin = () => {
    setPinned((prev) => {
      if (prev) setHovered(false);
      return !prev;
    });
  };

  return (
    <>
      {/* overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          fixed lg:static
          top-0 left-0
          z-40
          flex h-screen shrink-0 flex-col
          overflow-hidden
          border-r border-gray-200
          bg-white
          transition-all duration-300
          dark:border-zinc-800 dark:bg-zinc-900
          lg:h-full
          w-[260px]
          ${expanded ? "lg:w-[260px]" : "lg:w-[80px]"}
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo + toggle pin */}
        <div
          className={`relative flex h-16 shrink-0 items-center px-5 ${
            expanded ? "justify-between" : "justify-center"
          }`}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path d="M12 2L2 9l10 13 10-13-10-7z" fill="#7367F0" />
            </svg>
            {expanded && (
              <span className="whitespace-nowrap text-lg font-semibold text-gray-800 dark:text-white">
                Ecommerce
              </span>
            )}
          </div>
          {expanded && (
            <button
              type="button"
              onClick={togglePin}
              className="shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-violet-500 dark:hover:bg-zinc-800"
              title={pinned ? "Unpin sidebar" : "Pin sidebar"}
            >
              <Circle
                size={18}
                className={pinned ? "fill-violet-500 text-violet-500" : ""}
              />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 min-h-0 overflow-x-hidden overflow-y-auto px-3 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {NAV_SECTIONS.map((section, i) => (
            <div key={i} className="mb-2">
              {section.title && expanded && (
                <p className="px-3 mt-5 mb-2 text-[11px] font-semibold tracking-wider text-gray-400 uppercase whitespace-nowrap">
                  {section.title}
                </p>
              )}
              {!section.title && i > 0 && (
                <div className="my-3 border-t border-gray-100" />
              )}
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label}>
                      <a
                        onClick={() => {
                          navigate(item.path);
                          setActiveItem(item.path);
                        }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer
                          ${
                            activeItem === item.path
                              ? "bg-violet-500 text-white shadow-sm shadow-violet-200 dark:bg-violet-500 dark:shadow-violet-200"
                              : "text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-zinc-800"
                          }
                          ${!expanded ? "justify-center" : ""}`}
                      >
                        <Icon size={19} className="shrink-0" />
                        {expanded && (
                          <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.label}
                          </span>
                        )}
                        {expanded && item.badge && (
                          <span
                            className={`text-white text-[11px] font-medium rounded-full px-1.5 py-0.5 min-w-[20px] text-center ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                        )}
                        {expanded && item.items && (
                          <ChevronRight
                            size={15}
                            className="text-gray-400 shrink-0"
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
