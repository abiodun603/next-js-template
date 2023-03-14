import React from 'react'
const Badge = ({type, content}) => {
  return (
    <div className={`badge badge-${type} ease-out duration-500 hover:scale-110`}>
        {content}
    </div>
  )
}

export default Badge