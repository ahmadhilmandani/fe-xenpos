import { IconBuildingStore, IconCalendarFilled } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import Table from "../../components/Table";

export default function Sales() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [selectedSubMenu, setSelectedSubMenu] = useState({
    sales: true,
    profit: false,
    item: false,
  })
  return (
    <div className="w-[80%] relative pb-8">
      <Navbar />
      <main className="px-10 mt-16">
        <section className="mt-8">
          <div className="flex justify-between">
            <header>
              <h1>
                Sales
              </h1>
              <p className="text-cust-gray-darker">
                You can see your profits on this page
              </p>
            </header>
            <div className="flex gap-3 items-center">
              <div className="flex gap-4 items-center">
                <IconBuildingStore className="fill-cust-black" size={16} />
                <div className="relative text-left">
                  <div onClick={() => { setOpenOutletOpt(!openOutletOpt) }}>
                    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 text-cust-gray-darker/85 py-2 font-semibold border-b border-cust-gray-darker/85 hover:border-cust-black hover:text-cust-black transition-all" id="menu-button" aria-expanded="true" aria-haspopup="true">
                      Options
                      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>


                  <ul className={`${openOutletOpt ? 'block' : 'hidden'} absolute left-0 z-10 mt-2 w-36 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</li>
                    <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-1">Support</li>
                    <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-2">License</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <IconCalendarFilled className="fill-cust-black" size={16} />
                <input type="date" className="bg-cust-bg-gray text-cust-gray-darker/85 py-2 font-semibold border-b border-cust-gray-darker/85 hover:border-cust-black hover:text-cust-black transition-all" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4 bg-white flex">
          {/* sub menu option of sales */}
          <div className="border-r w-[20%]">
            <div className={`${selectedSubMenu.sales ? 'bg-cust-gray' : 'hover:bg-cust-gray/20'} p-4 cursor-pointer`} onClick={() => {
              setSelectedSubMenu({
                sales: true,
                profit: false,
                item: false,
              })
            }}>
              Sales Summary
            </div>
            <div className={`${selectedSubMenu.profit ? 'bg-cust-gray' : 'hover:bg-cust-gray/20'} p-4 cursor-pointer`} onClick={() => {
              setSelectedSubMenu({
                sales: false,
                profit: true,
                item: false,
              })
            }}>
              Gross Profit
            </div>
            <div className={`${selectedSubMenu.item ? 'bg-cust-gray' : 'hover:bg-cust-gray/20'} p-4 cursor-pointer`} onClick={() => {
              setSelectedSubMenu({
                sales: false,
                profit: false,
                item: true,
              })
            }}>
              Item Sales
            </div>
          </div>

          {/* sub menu: sales summary */}
          <div className={`${selectedSubMenu.sales ? 'block' : 'hidden'} p-4 w-[80%] transition-all`}>
            <div className="flex justify-between mb-4">
              <div>
                Gross Sales
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div>
                Discounts
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between pb-4 border-b border-cust-gray">
              <div>
                Refunds
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between pt-4 mb-4">
              <div className="font-bold">
                Discounts
              </div>
              <div className="font-bold">
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div>
                Gratuity
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div>
                Tax
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between pb-4">
              <div>
                Rounding
              </div>
              <div>
                Rp. 0
              </div>
            </div>
            <div className="flex justify-between pt-4 pb-4 border-x-0 border-y border-cust-gray">
              <div className="font-bold">
                Total Collected
              </div>
              <div className="font-bold">
                Rp. 0
              </div>
            </div>
          </div>

          {/* sub menu: gross profit */}
          <div className={`${selectedSubMenu.profit ? 'block' : 'hidden'} p-4 w-[80%] transition-all`}>
            <h2>Gross Profit</h2>
            <p className="mt-2">Gross Profit is your Net Sales minus Cost of Goods Sold (COGS). To report gross profit accurately, please make sure all items have a COGS.</p>
          </div>

          {/* sub menu: item sales */}
          <div className={`${selectedSubMenu.item ? 'block' : 'hidden'} p-4 w-[80%] transition-all`}>
            <Table tableHeader={[
              "Item Name",
              "Category",
              "Item Sold",
              "Item Refund",
              "Gross Sales",
              "Discount",
              "Refund",
              "Net Sales",
              "COGS",
              "Gross Profit",
            ]}>
              <tr>
                <td className="p-3 text-gray-700 whitespace-nowrap">
                  Kring New Fit office chair, mesh + PU, black
                </td>
                <td className="p-3 text-gray-700 whitespace-nowrap">
                  Manis
                </td>
                <td className="p-3 text-gray-700 whitespace-nowrap">16</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">Rp. 100.000.000</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">Rp. 10.000</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">Rp. 5.000</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">Rp. 5.000</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">Rp. 5.000</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">$200.00</td>
                <td className="p-3 text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>
            </Table>
          </div>
        </section>
      </main>
    </div>
  )

}