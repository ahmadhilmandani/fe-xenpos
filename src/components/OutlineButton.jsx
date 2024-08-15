import PropTypes from 'prop-types'


export default function OutlineButton({ children, clickAction }) {
  return (
    <button onClick={clickAction} className="w-full px-4 py-2 border border-cust-black text-cust-black flex justify-center items-center gap-1 font-bold transition-all hover:bg-cust-black/10 whitespace-nowrap flex-wrap">
      {children}
    </button>
  )
}

OutlineButton.propTypes = {
  children: PropTypes.any,
  clickAction: PropTypes.func,
}