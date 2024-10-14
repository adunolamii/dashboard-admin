"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
// import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  // const {user, isSignIn} = useUser()
  return (
    <div className=' flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'} alt='logo' width={160} height={100}/>
     
          <Link href={'/sign-in'}>
              <Button>Get Started</Button>
          </Link>
        
      
        
        
    </div>
  )
}

export default Header