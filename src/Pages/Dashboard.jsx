import { IconBrandMastercard, IconBuildingStore, IconCalendarFilled, IconCashRegister, IconCurrencyDollar, IconDatabase } from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, BarChart, Legend, Bar } from "recharts";

export default function Dashboard() {
  const [openOutletOpt, setOpenOutletOpt] = useState(false)
  const [outletSelected, setOutletSelected] = useState({
    value: 'Warteg_Bahari',
    name: 'Warteg Bahari'
  })
  const data = [{ name: 'Page A', uv: 400 }, { name: 'Page B', uv: 100 }, { name: 'Page C', uv: 320 }, { name: 'Page D', uv: 210 }];
  const data2 = [{ name: 'Kaos Kaki', quantity: 400 }, { name: 'SilverQueen', quantity: 100 }, { name: 'Le minerale', quantity: 320 }, { name: 'Susu Bender', quantity: 210 }];

  return (
    <>
      <Navbar />
      <main className="pr-6 mt-16 mb-12">
        <section className="mt-8">
          <div className="flex justify-between">
            <header>
              <h1>
                Profile Statistics
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
        <section className="bg-white mt-8 p-4">
          <h2 className="mb-8">
            Daily Gross Sales Amount
          </h2>
          <div className="h-72">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="bg-white mt-8 p-4">
          <h2 className="mb-8">
            Top Item
          </h2>
          <div className="h-72">
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <BarChart width={730} height={250} data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </>
  )

}