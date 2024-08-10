import { IconBuildingStore, IconCalendarFilled } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import Table from "../../components/Table";

export default function ShiftByName() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [outletSelected, setOutletSelected] = useState({
    value: 'Warteg_Bahari',
    name: 'Warteg Bahari'
  })

  return (
    <div className="w-[80%] relative pb-8">
      <Navbar />
      <main className="px-10 mt-16">
        <section className="mt-8">
          <div className="flex justify-between">
            <header>
              <h1>
              Shift By Cashier Name
              </h1>
              <p className="text-cust-gray-darker">
              You can see the shifts that have been made
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
        <section className="mt-8 bg-white p-6">
          <h2 className="mb-2">
          Shift By Name Table
          </h2>
          <Table tableHeader={[
            "Cashier Name", "Shift Count", "Action"
          ]}>
            <tr>
              <td className="p-3 text-gray-700 whitespace-nowrap">
                Kring New Fit office chair, mesh + PU, black
              </td>
              <td className="p-3 text-gray-700 whitespace-nowrap">
                Manis
              </td>
              <td className="p-3 text-gray-700 whitespace-nowrap">16</td>
            </tr>
          </Table>
        </section>
      </main>
    </div>
  )
}