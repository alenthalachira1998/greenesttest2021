
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
const bg={
  color:"#f5f6fa"
}

export default function MyModalOne() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" inset-0  flex items-center justify-center ">
        <button
          type="button"
          onClick={openModal}
          className="text-center text-white mx-10 px-3 py-3  hover:opacity-70 lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-5xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm rounded-md"
        >
          Design Features
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}> 
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block h-auto w-auto p-6 my-20  overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-xl bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl" >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >            <button
                type="button"
                onClick={closeModal}
                className="relative">
                  <span className="absolute text-3xl text-blue-500 lg:-right-44 -top-11 -right-36 hover:text-red-500">
                  
                   </span> </button><div className="flex justify-between"><h1 className="lg:text-xl text-sm text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold">Design Features </h1>  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium  text-yellow-500 border border-transparent bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl rounded-lg hover:opacity-70 focus:outline-none"
                    onClick={closeModal}
                  >
                    Close
                  </button></div>
              
                </Dialog.Title>
              
                <div className="mt-2">
              

      <div className="grid xl:grid-cols-5 grid-cols-2 p-4  lg:gap-8 gap-4 justify-center">
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Passive Architecture</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Integrated Design Process</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Universal Design</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Biophilic Design</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">High-performance</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">ICodes of Practice</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">IGBC Pre-certified</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Net Zero Energy Building</h2></div>
  <div className="rounded-2xl shadow-xl h-44 flex justify-center items-center border-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-yellow-700 font-bold  hover:transform scale-75  lg:mt-8 mb-8 bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-20  backdrop-filter backdrop-blur-sm  "><h2 className="text-sm text-center lg:text-xl">Vastu Compliant</h2></div>
</div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium  text-yellow-500 border border-transparent bg-white bg-opacity-10  shadow-14xl relative z-2  border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-xl rounded-lg hover:opacity-70 focus:outline-none"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
