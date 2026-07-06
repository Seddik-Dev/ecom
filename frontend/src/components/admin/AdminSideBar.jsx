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
        onMouseEnter={() => !pinned && setHovered(true)}
        onMouseLeave={() => !pinned && setHovered(false)}
        className={`fixed lg:sticky top-0 h-screen bg-white border-r border-gray-200 z-40
          transition-all duration-300 ease-in-out flex flex-col
          ${expanded ? "w-[260px]" : "w-[80px]"}
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Logo + toggle pin */}
        <div className="flex items-center justify-between h-16 px-5 shrink-0">
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
              <span className="font-semibold text-lg text-gray-800 whitespace-nowrap">
                Vuexy
              </span>
            )}
          </div>
          {expanded && (
            <button
              onClick={() => setPinned((p) => !p)}
              className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-violet-500 transition-colors shrink-0"
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
        <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 pb-6">
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
                              ? "bg-violet-500 text-white shadow-sm shadow-violet-200"
                              : "text-gray-600 hover:bg-gray-100"
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
