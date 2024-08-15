import { IconX } from "@tabler/icons-react"
import Button from "../Button"
import { useSelector, useDispatch } from "react-redux"
import { close } from "../../store/features/openSidebarAddSlic"

export default function SidebarAddItemCategory() {
  const dispatch = useDispatch()
  const openSidebarAdd = useSelector((state) => { return state.openSidebarAdd.value })

  return (
    <aside className={`${openSidebarAdd ? 'w-[400px] p-6 h-auto' : 'w-[0px] p-0 h-0'} relative z-40 bg-cust-gray block transition-all overflow-x-hidden`}>
      <div className="flex justify-between items-center mb-5">
        <h2>
          Create Category
        </h2>
        <IconX onClick={() => { dispatch(close()) }} className="hover:cursor-pointer" />
      </div>
      <div>
        <div className="mb-5">
          <label htmlFor="item Name" className="block text-sm text-cust-gray-darker">Category Name</label>
          <div className="mt-2">
            <input type="text" name="item Name" id="item Name" className="block w-full bg-cust-bg-gray border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-400/70 placeholder:text-gray-500/75 focus:ring-2 focus:outline-none focus:border-none focus:ring-inset focus:ring-cust-yellow sm:text-sm sm:leading-6" placeholder="e.g: Dark Chocolate" />
          </div>
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