import { IconX } from "@tabler/icons-react"
import Button from "../Button"
import { useSelector, useDispatch } from "react-redux"
import { close } from "../../store/features/openSidebarAddSlic"

export default function SidebarAddItem() {
  const dispatch = useDispatch()
  const openSidebarAdd = useSelector((state)=>{return state.openSidebarAdd.value})

  return (
    <aside className={`${openSidebarAdd ? 'w-[400px] p-6 h-auto' : 'w-[0px] p-0 h-0'} relative z-40 bg-cust-gray block transition-all overflow-x-hidden`}>
      <div className="flex justify-between items-center mb-5">
        <h2>
          Create Item
        </h2>
        <IconX onClick={() => { dispatch(close()) }} className="hover:cursor-pointer" />
      </div>
      <div>
        <div className="mb-5">
          <label htmlFor="image Item" className="block text-sm text-cust-gray-darker">Image Item</label>
          <div className="mt-2">
            <input type="file" name="image Item" id="image Item" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="item Name" className="block text-sm text-cust-gray-darker">Item Name</label>
          <div className="mt-2">
            <input type="text" name="item Name" id="item Name" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="item category" className="block text-sm text-cust-gray-darker">Item Category</label>
          <div className="mt-2">
            <select type="text" name="item category" id="item category" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6">
              <option value="">hidup</option>
              <option value="">itu</option>
              <option value="">pilihan</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="item Price" className="block text-sm text-cust-gray-darker">Item Price</label>
          <div className="mt-2">
            <input type="text" name="item Price" id="item Price" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="stock Quantity" className="block text-sm text-cust-gray-darker">Stock Quantity <small className="text-xs text-red-500">{`(Can't`} edit stock qty if {`you've`} already filled it, edit it on the inventory {`page)`}</small> </label>
          <div className="mt-2">
            <input type="text" name="stock Quantity" id="stock Quantity" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="stock Alert" className="block text-sm text-cust-gray-darker">Stock Alert</label>
          <div className="mt-2">
            <input type="text" name="stock Alert" id="stock Alert" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="cOGS" className="block text-sm text-cust-gray-darker">COGS</label>
          <div className="mt-2">
            <input type="text" name="cOGS" id="cOGS" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
        </div>
        <div className="text-red-500 text-xs mb-5">
          The item price, stock quantity, stock alert, and cogs will automatically follow the variant
        </div>
        <div className="mt-8 flex gap-2 items-center">
          <input type="checkbox" name="cOGS" id="cOGS" className="" placeholder="e.g: Dark Chocolate" />
          <label htmlFor="cOGS" className="block text-sm text-cust-gray-darker">Apply multiple price per sales type</label>
        </div>
      </div>
      <div className="absolute bottom-6 right-6">
        <Button>
          Save
        </Button>
      </div>

    </aside>
  )
}