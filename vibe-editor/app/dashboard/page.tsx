
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-start items-center min-h-screen mx-auto px-4 py-10'>
      <div className='grid grid-col-1 md:grid-cols-2 gap-6 w-full '>
        <AddNewButton />
        <AddRepo />
      </div>
    </div>
  )
}

export default page
