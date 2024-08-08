import { IconMenu2 } from "@tabler/icons-react";

export default function Navbar() {
  return (

    <nav className="bg-cust-bg-gray w-full h-16 sticky top-0 left-0 flex justify-between items-center px-10 z-50">
      <IconMenu2 stroke={1.5} className=" fill-cust-black w-[24px]" />
      <div>
        <p className="text-sm">Asep</p>
        <small className="text-cust-gray-darker text-xs">Owner</small>
      </div>
    </nav>

  )
}