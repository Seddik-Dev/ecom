import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSideBar from "../components/admin/AdminSideBar";
import { useState } from "react";

function LayoutAdmin() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSideBar
        open={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminNavbar onToggleSidebar={() => setMobileOpen((o) => !o)} />
        <main className="text-gray-500 text-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default LayoutAdmin;
