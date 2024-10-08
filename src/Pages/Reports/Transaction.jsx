import { IconBrandMastercard, IconBuildingStore, IconCalendarFilled, IconCashRegister, IconCurrencyDollar, IconDatabase } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import Table from "../../components/Table";

export default function Transaction() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [outletSelected, setOutletSelected] = useState({
    value: 'Warteg_Bahari',
    name: 'Warteg Bahari'
  })

  return (
    <div>
      <Navbar />
      <main className="pr-6 mt-16">
        <section className="mt-8">
          <div className="flex justify-between">
            <header>
              <h1>
                Transactions
              </h1>
              <p className="text-cust-gray-darker">
                This page displays the list of transactions.
              </p>
            </header>
            <div className="flex gap-3 items-center">
              <div className="flex gap-4 items-center">
                <IconBuildingStore className="fill-cust-black" size={16} />
                <div className="w-36">
                  <Dropdown
                    openDropdown={openOutletOpt}
                    setOpenDropdown={() => { setOpenOutletOpt(!openOutletOpt) }}
                    selectedOpt={outletSelected}
                    setSelectedOpt={setOutletSelected}
                    option={[
                      {
                        value: 'Warteg_Bahari',
                        name: 'Warteg Bahari'
                      },
                      {
                        value: 'toko_mas',
                        name: 'Toko Mas'
                      },
                      {
                        value: 'nasgor_yakaya',
                        name: 'Nasgor Yakaya'
                      }
                    ]}
                  />
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <IconCalendarFilled className="fill-cust-black" size={16} />
                <input type="date" className="bg-cust-bg-gray text-cust-gray-darker/85 py-2 font-semibold border-b border-cust-gray-darker/85 hover:border-cust-black hover:text-cust-black transition-all" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 flex justify-between items-center">
          <div className="bg-white p-6 aspect-video w-[23%]">
            <IconBrandMastercard className="stroke-white p-3 aspect-square rounded-full bg-cust-yellow" size={46} />
            <small className="text-cust-gray-darker/60 block mt-3">
              Gross Sales
            </small>
            <b className="block">
              Rp 0
            </b>
          </div>
          <div className="bg-white p-6 aspect-video w-[23%]">
            <IconDatabase className="stroke-white p-3 aspect-square rounded-full bg-cust-yellow" size={46} />
            <small className="text-cust-gray-darker/60 block mt-3">
              Net Sales
            </small>
            <b className="block">
              Rp 0
            </b>
          </div>
          <div className="bg-white p-6 aspect-video w-[23%]">
            <IconCurrencyDollar className="stroke-white p-3 aspect-square rounded-full bg-cust-yellow" size={46} />
            <small className="text-cust-gray-darker/60 block mt-3">
              Gross Profit
            </small>
            <b className="block">
              Rp 0
            </b>
          </div>
          <div className="bg-white p-6 aspect-video w-[23%]">
            <IconCashRegister className="stroke-white p-3 aspect-square rounded-full bg-cust-yellow" size={46} />
            <small className="text-cust-gray-darker/60 block mt-3">
              Transactions
            </small>
            <b className="block">
              Rp 0
            </b>
          </div>
        </section>
        <section className="mt-4 bg-white p-6">
          <h2 className="mb-2">
            Transactions Table
          </h2>
          <Table tableHeader={[
            "Date", "Time", "Receipt", "Shift", "Item", "Total", "Price", "Payment", "Action"
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
            </tr>
          </Table>
        </section>
      </main>
    </div>
  )
}