import { IconBookFilled, IconCalendarFilled, IconChevronRight, IconLayoutDashboardFilled, IconPointFilled } from "@tabler/icons-react"
import { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  const [sideItemOpen, setSideItemOpen] = useState({
    report: false,
    library: false
  })
  return (

    <aside className="w-[240px] h-screen sticky top-0 bottom-0 left-0 z-[100] bg-cust-black overflow-auto">
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
      <div className={`${sideItemOpen.report ? 'h-[240px]' : 'h-0'} overflow-hidden transition-all`}>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Sales
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Transaction
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Refund
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Shift
          </div>
        </NavLink>
        <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
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
      <div className={`${sideItemOpen.library ? 'h-[240px]' : 'h-0'} overflow-hidden transition-all`}>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Item Library
          </div>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Category
          </div>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Modifier
          </div>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Discount
          </div>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Sales Type
          </div>
        </NavLink>
        <NavLink to="/sales" className={({ isActive }) =>
          isActive
            ? "bg-cust-black-darker flex items-center gap-6 px-4 py-4"
            : "hover:bg-cust-black-darker/50 flex items-center gap-6 px-4 py-4"
        }>
          <IconPointFilled stroke={1.5} className=" fill-cust-gray w-[24px]" size={16} />
          <div className="text-cust-gray">
            Tax
          </div>
        </NavLink>
      </div>
    </aside>
  )
}