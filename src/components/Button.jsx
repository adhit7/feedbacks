import React from 'react'

function Button({children, type, isDisabled, version}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    isDisabled : false,
    type : 'button',
    version : 'primary'
}


export default Button