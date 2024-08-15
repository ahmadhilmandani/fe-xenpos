import { Outlet } from "react-router-dom"
export default function AuthLayout() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  )
}