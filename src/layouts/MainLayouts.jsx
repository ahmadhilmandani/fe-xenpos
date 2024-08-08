import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
export default function MainLayout() {
  return (
    <div className="w-full min-h-screen flex justify-between gap-x-6">
      <Sidebar />
      <Outlet />
    </div>
  )
}