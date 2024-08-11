import { IconBuildingStore, IconPlus, IconX } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function Item() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [outletSelected, setOutletSelected] = useState({
    value: 'Warteg_Bahari',
    name: 'Warteg Bahari'
  })
  const [openSide, setOpenSide] = useState(false)

  return (
    <>
      <Navbar />
      <div className="flex h-[calc(100%-60px)]">
        <main className="pr-6 mt-16 flex-1 overflow-x-auto">
          <section className="mt-8">
            <div className="flex justify-between">
              <header>
                <h1>
                  Item Library
                </h1>
                <p className="text-cust-gray-darker">
                  Here, you can create your item and view the list.
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
                <Button clickAction={() => { setOpenSide(!openSide) }}>
                  Create Item
                  <IconPlus size={20} className="stroke-cust-black" />
                </Button>
              </div>
            </div>
          </section>
          <section className="mt-8 bg-white p-6">
            <h2 className="mb-2">
              Item Table
            </h2>
            <Table tableHeader={[
              "Item Name", "Category", "Price", "In Stock", "Stock Alert", "Action"
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
              </tr>
            </Table>
          </section>
        </main>
        <aside className={`${openSide ? 'w-[400px]' : 'w-[0px] p-0'} relative z-40 bg-cust-gray block p-6 transition-all overflow-hidden`}>
          <div className="flex justify-between items-center mb-2">
            <h2>
              Create Item
            </h2>
            <IconX onClick={() => { setOpenSide(false) }} className="hover:cursor-pointer" />
          </div>
          <div className="absolute bottom-6 right-6">
            <Button>
              Save
            </Button>
          </div>

        </aside>
      </div>
    </>
  )
}