import PropTypes from 'prop-types'


export default function Button({ children, clickAction }) {
  return (
    <button onClick={clickAction} className="px-4 py-2 bg-cust-yellow text-cust-black flex justify-center items-center gap-1 font-bold hover:translate-y-[-1px] transition-all hover:shadow-lg hover:shadow-cust-yellow/80 whitespace-nowrap flex-wrap">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  clickAction: PropTypes.func,
}