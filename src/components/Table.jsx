/* eslint-disable no-constant-condition */
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import PropTypes from 'prop-types'
import Dropdown from "./Dropdown";
import { useState } from "react";


export default function Table({ tableHeader, children, displayShowEntries = true, displaySearchBar = true }) {
  const [openEntries, setOpenEntries] = useState(false)
  const [selectedEntries, setSelectedEntries] = useState({
    value: 50,
    name: 50
  })
  return (
    <>
      <div className="mb-5 flex justify-between items-center">
        <div className={`${displayShowEntries ? 'flex' : 'hidden'} gap-3 items-center`}>
          <div>
            Show
          </div>
          <div className="w-14">
            <Dropdown
              openDropdown={openEntries}
              setOpenDropdown={() => { setOpenEntries(!openEntries) }}
              selectedOpt={selectedEntries}
              setSelectedOpt={setSelectedEntries}
              option={[
                {
                  value: 10,
                  name: 10
                },
                {
                  value: 25,
                  name: 25
                },
                {
                  value: 50,
                  name: 50
                },
                {
                  value: 100,
                  name: 100
                },
              ]}
            />
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
              {tableHeader.map((valOfTabHead) => {
                return (
                  <>
                    <th className="w-32 p-3 font-semibold tracking-wide text-left">{valOfTabHead}</th>
                  </>
                )
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-cust-gray">
            {children}
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

Table.propTypes = {
  tableHeader: PropTypes.array,
  children: PropTypes.any,
  displayShowEntries: PropTypes.bool,
  displaySearchBar: PropTypes.bool
}