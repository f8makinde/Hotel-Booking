"use client"
import Profile from "../assets/profile.png"
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { PiCirclesFourLight } from "react-icons/pi";
import { BsTicketPerforated } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai"
import { CiSettings } from "react-icons/ci";
import { TbEditCircle } from "react-icons/tb";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
  } from '@heroicons/react/outline'

import { SearchIcon } from '@heroicons/react/solid'
import Sidebar from './Sidebar'
import Mobile from './Mobile'
import Image from "next/image";
import Content from "./Content";

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Explore City', href: '#', icon: PiCirclesFourLight, current: false },
  { name: 'Tickets', href: '#', icon: BsTicketPerforated, current: false },
  { name: 'Favorites', href: '#', icon: AiOutlineHeart, current: false },
  { name: 'Setting', href: '#', icon: CiSettings, current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-8 w-8 text-primary border rounded-full" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'hover:bg-primary hover:text-white text-white/80 underline' : 'text-white hover:text-white hover:bg-primary',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden md:flex md:w-56 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto">
            <div className="flex flex-col items-center flex-shrink-0 flex-1 px-4 space-y-6">
              <h1 className='text-2xl font-bold text-primary'>Mima<span className='text-gray'>Booking</span></h1>
              <div className="relative">
              <Image src={Profile} className='w-20 h-20 rounded-full bg-primary ring-1 ring-[#8C9099] ring-offset-4' />
                  <div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2
                  h-6 w-6 flex justify-center rounded-full bg-primary text-white'><TbEditCircle size={20}/></div>
              </div>
              <p className='font-medium text-gray text-lg text-center'>ilia jan</p>
            </div>
            
            <div className="flex-1 flex flex-col">
              <nav className="flex-1 px-4 pb-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'hover:bg-primary hover:text-white text-primary' : 'text-gray hover:text-white hover:bg-primary',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className='text-gray flex items-center space-x-3 flex-1 px-6'>
                <MdOutlineKeyboardArrowRight className="border w-5 h-5 rounded-full border-[#ABABAB]"/>&nbsp; <span>Logout</span>
            </div>
          </div>
        </div>
        <div className="md:pl-64 md:pr-6 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-[72px] md:px-3 bg-white rounded-2xl overflow-hidden">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative md:w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none md:pl-3">
                      <SearchIcon className="md:h-5 md:w-5 w-3 h-3 text-[#B3BBC9]" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="border md:my-3 my-2 rounded-xl border-[#F5F5F5] md:px-12 px-6 py-3 md:text-base text-sm text-gray-900 placeholder-gray-500 focus:outline-none sm:text-sm"
                      placeholder="Search any things..."
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-2 flex md:flex-row flex-wrap items-center md:space-x-8 md:ml-6">
                <p className='text-[#454B58] md:text-base text-sm  md:font-medium md:flex hidden'>Saturday, may 3, 2023</p>
                <div className='relative'>
                <button
                  type="button"
                  className="bg-white p-1 border border-[#F5F5F5]  rounded-xl text-[#6C707A] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <BellIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                    <div className='bg-[#FF515A] md:h-4 md:w-4 h-3 w-3 inline-flex items-center justify-center rounded-full text-white text-xs absolute md:top-0 -top-1 md:-left-5 -left-1'>3</div>
                    </div>
              
              </div>
            </div>
          </div>
          <Content />
        </div>
      </div>
    </>
  )
}
