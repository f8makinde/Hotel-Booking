"use client"
import React from 'react'
import {  Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    MenuAlt2Icon,
  } from '@heroicons/react/outline'
  import { Fragment, useState } from 'react'
  import { SearchIcon } from '@heroicons/react/solid'
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
const Mobile = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
    

    </>
  )
}

export default Mobile
