import React from 'react'

function Counter({title,count}) {
  return (
    <div>
      <h3 className='text-center' > {title} = {count}</h3>
    </div>
  )
}

export default Counter
