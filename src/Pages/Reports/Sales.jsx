import { IconBuildingStore } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import { useState } from "react";

export default function Sales() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  return (
    <div className="flex-1 relative">
      <Navbar />
      <main className="px-10 mt-16">
        <section className="flex gap-4 items-center">
          <IconBuildingStore className=" fill-cust-black" />

          <div className="relative text-left">
            <div onClick={() => { setOpenOutletOpt(!openOutletOpt) }}>
              <button type="button" className="inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>


            <ul className={`${openOutletOpt ? 'block' : 'hidden'} absolute left-0 z-10 mt-2 w-36 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <div className="py-1" role="none">
                <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</li>
                <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-1">Support</li>
                <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-2">License</li>
              </div>
            </ul>
          </div>
        </section>
        <section className="mt-8">
          <h1>
            Sales
          </h1>
          <p className="text-cust-gray-darker">
            You can see your profits on this page
          </p>
        </section>
      </main>
    </div>
  )

}