import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex gap-6">
      <Sidebar />
      <div className="main-container relative">
        <Outlet />
      </div>
    </div>
  )
}