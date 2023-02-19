import React from 'react'

const Headline = (props) => {
  return (
    <h1 className={`text-[52px] font-bold ${props.className}`}>
        {props.children}
    </h1>
  )
}

export default Headline