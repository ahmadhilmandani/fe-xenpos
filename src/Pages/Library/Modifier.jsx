import { IconBuildingStore, IconPlus } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Dropdown from "../../components/Dropdown";
import { useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";
import { toggle } from "../../store/features/openSidebarAddSlic";
import { useDispatch } from "react-redux";
import SidebarAddItemModifier from "../../components/Library/SidebarAddModifier";

export default function Modifier() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [outletSelected, setOutletSelected] = useState({
    value: 'Warteg_Bahari',
    name: 'Warteg Bahari'
  })
  const dispatch = useDispatch()
  return (
    <>
      <Navbar />
      <div className="flex">
        <main className="pr-6 mt-16 flex-1 overflow-x-auto">
          <section className="mt-8">
            <div className="flex justify-between">
              <header>
                <h1>
                Modifier
                </h1>
                <p className="text-cust-gray-darker">
                Here, you can create your outlet Modifier and view the list.
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
                <Button clickAction={() => { dispatch(toggle()) }}>
                  Create Modifier
                  <IconPlus size={20} className="stroke-cust-black" />
                </Button>
              </div>
            </div>
          </section>
          <section className="mt-8 bg-white p-6">
            <h2 className="mb-2">
              Modifier Table
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
        <SidebarAddItemModifier />
      </div>
    </>
  )
}