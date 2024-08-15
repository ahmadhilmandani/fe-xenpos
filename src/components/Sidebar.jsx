import { IconBookFilled, IconCalendarFilled, IconChevronRight, IconLayoutDashboardFilled, IconLogout } from "@tabler/icons-react"
import { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const [sideItemOpen, setSideItemOpen] = useState({
    report: false,
    library: false
  })
  return (

    <aside className="w-[240px] h-screen flex flex-col justify-between sticky top-0 bottom-0 left-0 z-[100] bg-cust-black overflow-auto shrink-0 pb-4">
      <div>

        {/* heading of sidebar */}
        <h1 className="text-cust-yellow mb-10 p-4">
          Xenpos
        </h1>


        {/* Link To Dashboard */}
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconLayoutDashboardFilled stroke={1.5} className=" fill-cust-gray" />
          <div className="text-cust-gray">
            Dashboard
          </div>
        </NavLink>


        {/* Button to Toggle Report Sub-Item */}
        <button className={`${sideItemOpen.report === false ? 'hover:bg-cust-black-darker/50' : ''} w-full flex items-center gap-6 px-4 py-4`}
          onClick={() => {
            setSideItemOpen({ ...sideItemOpen, report: !sideItemOpen.report })
          }}
        >
          <IconCalendarFilled stroke={1.5} className=" fill-cust-gray" />
          <div className="flex justify-between items-center flex-1">
            <div className="text-cust-gray">
              Report
            </div>
            <IconChevronRight stroke={2.2} className={`${sideItemOpen.report ? 'rotate-[90deg]' : ''} stroke-cust-gray transition-all`} />
          </div>
        </button>

        {/* Sub-item of Report (open only if sideItemOpen.report true) */}
        <div className={`${sideItemOpen.report ? 'h-[260px]' : 'h-0'} overflow-hidden transition-all`}>
          <NavLink to="/sales" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"
          }>
            <div className="text-cust-gray translate-x-20">
              Sales
            </div>
          </NavLink>
          <NavLink to="/transaction" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"
          }>
            <div className="text-cust-gray translate-x-20">
              Transaction
            </div>
          </NavLink>
          <NavLink to="/refund" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"
          }>
            <div className="text-cust-gray translate-x-20">
              Refund
            </div>
          </NavLink>
          <NavLink to="/shift" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"
          }>
            <div className="text-cust-gray translate-x-20">
              Shift
            </div>
          </NavLink>
          <NavLink to="/shift-by-name" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"
          }>
            <div className="text-cust-gray translate-x-20">
              Shift By Name
            </div>
          </NavLink>
        </div>

        {/* Button to Toggle Library Sub-Item */}
        <button className="w-full flex items-center gap-6 px-4 py-4" onClick={() => {
          setSideItemOpen({ ...sideItemOpen, library: !sideItemOpen.library })
        }}>
          <IconBookFilled stroke={1.5} className=" fill-cust-gray" />
          <div className="flex justify-between items-center flex-1">
            <div className="text-cust-gray">
              Library
            </div>
            <IconChevronRight stroke={2.2} className={`${sideItemOpen.library ? 'rotate-[90deg]' : ''} stroke-cust-gray transition-all`} />
          </div>
        </button>

        {/* Sub-item of Libray (open only if sideItemOpen.library true) */}
        <div className={`${sideItemOpen.library ? 'h-[320px]' : 'h-0'} overflow-hidden transition-all`}>
          <NavLink to="/library/item" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Item Library
            </div>
          </NavLink>
          <NavLink to="/library/category" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Category
            </div>
          </NavLink>
          <NavLink to="/library/modifier" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Modifier
            </div>
          </NavLink>
          <NavLink to="/library/discount" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Discount
            </div>
          </NavLink>
          <NavLink to="/library/sales-type" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Sales Type
            </div>
          </NavLink>
          <NavLink to="/library/tax" className={({ isActive }) =>
            isActive
              ? "bg-cust-black-darker px-[2px] block py-4"
              : "hover:bg-cust-black-darker/50 px-[2px] block py-4"}>
            <div className="text-cust-gray translate-x-20">
              Tax
            </div>
          </NavLink>
        </div>
      </div>

      {/* Button of Logout */}
      <button className="flex items-center gap-6 px-4 py-4 text-rose-400/80 font-bold hover:bg-rose-400/10 transition-all">
        <IconLogout stroke={2.5} className=" stroke-rose-400/80" />
        Log out
      </button>
    </aside>
  )
}