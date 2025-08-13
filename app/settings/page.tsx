'use client'
import { Button } from '@/components/ui/button';
import { useClerk } from '@clerk/nextjs';
import React from 'react'

const Page = () => {
    const {signOut} = useClerk();
    console.log(signOut)
  return (
    <div>
        <Button onClick={()=>{signOut()}}>Logout</Button>
    </div>
  )
}

export default Page