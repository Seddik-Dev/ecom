import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSideBar from "../components/admin/AdminSideBar";
import { useState } from "react";

function LayoutAdmin() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-zinc-950">
      <AdminSideBar
        open={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminNavbar onToggleSidebar={() => setMobileOpen((o) => !o)} />
        <main className="flex-1 overflow-y-auto text-sm text-gray-500">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LayoutAdmin;
