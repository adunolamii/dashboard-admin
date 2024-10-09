import React from 'react'
import Top from './Top'
import Link from 'next/link'
import Likelihood from '../likelihood/page.js'

const HeroSection = () => {
  return (
    <div className=''>
    {/* <Link href={'dashboard'}>
    </Link> */}
       <Top/>
       <Likelihood/>
      
    </div>
  )
}

export default HeroSection