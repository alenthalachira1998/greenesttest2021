import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function MyDropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex justify-center">
          <Menu.Button className="mx-10  lg:mt-8 mb-8 inline-flex justify-center px-5 py-3 text-base font-medium text-white bg-white rounded-md bg-opacity-10 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            Life in One
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-green-500' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <Link href="/sections/ElegantResortLiving">
          <a>  Elegant Resort Living</a>
        </Link>
                 
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-green-400' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                       <Link href="/sections/ImprovedQualitySpace">
          <a>  Improved Quality Space</a>
        </Link>
                 
                    
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-green-400' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >

<Link href="/sections/LowLivingCost">
          <a>  Low Living Cost</a>
        </Link>
                 
                  </button>
                )}
              </Menu.Item>
              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>

  )
}


