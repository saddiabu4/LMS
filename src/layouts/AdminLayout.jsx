import Sidebar from "@/components/common/Sidebar"
import { Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet />
      </div>
    </div>
  )
}