import React from 'react'

function Button({className,onClick,children,name}) {
  return (
    <button className={className} name={name} onClick={onClick}>{children}</button>
  )
}

export default Button
