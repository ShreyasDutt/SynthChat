import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { ArrowUp } from 'lucide-react'
import { DropdownMenuRadio } from './DropdownRadio'

const AiInput = () => {
  return (
    <div>
    <div className='border-8 rounded-xl border-foreground/5'>
        <Textarea
            placeholder="Type your message here..."
                    className="w-2xl resize-none max-h-82 
                                rounded-xl font-semibold
                                scrollbar-thin scrollbar-thumb-accent-foreground p-4"
                    />

    <div className='flex justify-between p-2 my-2'>
        <div className='flex gap-3 px-2.5'>
            <DropdownMenuRadio/>
            <p>Search Icon</p>
            <p>Clip</p>
        </div>
        
        <Button><ArrowUp/></Button>

    </div>
    </div>
    </div>

  )
}

export default AiInput