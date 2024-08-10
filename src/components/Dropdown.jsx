import PropTypes from 'prop-types'

export default function Dropdown({ openDropdown, setOpenDropdown, option, selectedOpt, setSelectedOpt }) {
  return (
    <div className="relative text-left w-full">
      <div onClick={setOpenDropdown}>
        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 text-cust-gray-darker/85 py-2 font-semibold border-b border-cust-gray-darker/85 hover:border-cust-black hover:text-cust-black transition-all" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {selectedOpt.name}
          <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <ul className={`${openDropdown ? 'block' : 'hidden'} absolute left-0 z-10 mt-2 w-36 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        {option.map((val) => {
          return (
            <>
              <li onClick={() => {
                setSelectedOpt(val)
                setOpenDropdown()
               }} className="block cursor-pointer hover:bg-cust-bg-gray px-4 py-2 text-sm text-gray-700 hyphens-auto" role="menuitem" tabIndex="-1" id="menu-item-0">{val.name}</li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  openDropdown: PropTypes.bool,
  setOpenDropdown: PropTypes.func,
  // option is array of object with 2 key => "value" & "name"
  option: PropTypes.array,
  selectedOpt: PropTypes.any,
  setSelectedOpt: PropTypes.func
}