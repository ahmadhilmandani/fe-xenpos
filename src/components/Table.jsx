import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function Table() {
  return (
    <>
      <div className="overflow-auto">
        <table className="w-full">
          <thead className="bg-cust-gray/20 border-b-2 border-cust-gray">
            <tr>
              <th className="w-44 p-3 text-sm font-semibold tracking-wide text-left">Item Name</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Category</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Item Sold</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Item Refund</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Gross Sales</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Discount</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Refund</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Net Sales</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">COGS</th>
              <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Gross Profit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cust-gray">
            <tr>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Kring New Fit office chair, mesh + PU, black
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                Manis
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp. 100.000</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp. 10.000</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp. 5.000</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp. 5.000</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Rp. 5.000</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
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