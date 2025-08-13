'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'


const UserTab = () => {
    const { user } = useUser();
    const router = useRouter();
    if (!user) return null;
  return (
    <div onClick={() => router.push('/settings') } className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent/20 cursor-pointer">
          <UserButton afterSignOutUrl="/" />
          <div className="flex flex-col">
            <span className="font-medium">{user.fullName}</span>
            <span className="text-xs text-muted-foreground">{user.primaryEmailAddress?.emailAddress}</span>
          </div>
        </div>
  )
}

export const LoginButton = () => {
    const router = useRouter();
    return(
        <Button variant={'ghost'} onClick={() => router.push('/sign-in')}>Login</Button>
    )
}

export default UserTab