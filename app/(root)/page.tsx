import AiInput from '@/components/shared/AiInput'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
       <p>T3 Chat</p>

       <div className='fixed -bottom-3'>
        <AiInput/>
       </div>
    </div>
  )
}

export default page