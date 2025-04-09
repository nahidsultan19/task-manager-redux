import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'


export default function Modal({isOpen, setIsOpen, title, children}) {

  function close() {
    setIsOpen(false)
  }
 

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25'/>
          </Transition.Child>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                <Dialog.Title as='h3' className="text-base/7 font-medium text-black">
                  {title}
                </Dialog.Title>
                {children}
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
