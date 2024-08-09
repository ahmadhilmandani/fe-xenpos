/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

// eslint-disable-next-line no-unused-vars
export default function Table({ tableHeader, tableBody, displayShowEntries = true, displaySearchBar = true}) {
  return (
    <>
      <div className="mb-5 flex justify-between items-center">
        <div className={`${displayShowEntries ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div>
            Show
          </div>
          <div className="relative text-left">
            <div>
              <button type="button" className="inline-flex w-full justify-center gap-x-1.5 text-cust-gray-darker/85 py-2 font-semibold border-b border-cust-gray-darker/85 hover:border-cust-black hover:text-cust-black transition-all" id="menu-button" aria-expanded="true" aria-haspopup="true">
                50
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <ul className={`${1 == 0 ? 'block' : 'hidden'} absolute left-0 z-10 mt-2 w-36 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
              <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-0">10s</li>
              <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-1">25</li>
              <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-1">50</li>
              <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-2">75</li>
              <li href="#" className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-2">100</li>
            </ul>
          </div>
          <div>
            entries
          </div>
        </div>
        <div className={`${displaySearchBar ? 'flex' : 'hidden'} gap-3 items-center`}>
          Search
          <input type="search" name="" id="" className="focus:outline-none pb-2 border-b border-b-cust-gray-darker" />
        </div>
      </div>
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-cust-gray/20 border-b-2 border-cust-gray">
            <tr>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Item Name</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Category</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Item Sold</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Item Refund</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Gross Sales</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Discount</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Refund</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">Net Sales</th>
              <th className="w-24 p-3 font-semibold tracking-wide text-left">COGS</th>
              <th className="w-32 p-3 font-semibold tracking-wide text-left">Gross Profit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cust-gray">
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
          </tbody>
        </table>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <small className="text-cust-gray-darker text-xs">
          Showing 0 to 0 of 0 entries
        </small>
        <div className="flex gap-4">
          <button className="px-4 py-1 border flex items-center text-cust-gray-darker gap-2">
            <IconArrowLeft className="stroke-cust-gray-darker" />
            Previous
          </button>
          <button className="px-4 py-1 border flex items-center text-cust-gray-darker gap-2">
            Next
            <IconArrowRight className="stroke-cust-gray-darker" />
          </button>
        </div>
      </div>
    </>
  )
}