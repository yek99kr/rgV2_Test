import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCloseFill } from "react-icons/ri";
import { CartContext } from "../../context/shopContext";

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const { cartOpen, setCartOpen } = useContext(CartContext);

  return (
    <>
      <Transition.Root show={cartOpen} as={Fragment}>
        <Dialog
          initialFocus={cancelButtonRef}
          as="div"
          className="fixed inset-0 z-[100] overflow-hidden"
          onClose={() => {
            setCartOpen(!cartOpen);
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden"
            // onClick={() => setCartOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity" />
            </Transition.Child>

            {/* flex justify-center items-center w-screen  lg:block  */}

            <div className="fixed inset-y-0 lg:right-0 flex lg:max-w-full lg:pl-10 overflow-x-hidden">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen lg:max-w-[430px] overflow-x-hidden">
                  <div
                    className="absolute w-full h-full z-[0] "
                    onClick={() => setCartOpen(false)}
                  ></div>
                  <div className="flex flex-col h-full overflow-x-hidden overflow-y-scrol items-center lg:items-stretch">
                    <div className="flex-1 px-4 py-6 overflow-x-hidden overflow-y-auto sm:px-6">
                      <div className="flex-1 lg:block w-[97vw] sm:w-[520px] md:w-[570px] lg:w-[400px] mt-[7vw] sm:mt-[2.3rem] lg:mt-0">
                        <div className="flow-root">
                          <div className="hidden lg:flex place-content-end mr-3 h-8 lg:mb-5">
                            <button
                              ref={cancelButtonRef}
                              type="button"
                              className="text-gray-400 hover:text-gray-500 bg-white/60 backdrop-blur-md rounded px-1 py-1 thumbcursor hidden lg:block "
                              onClick={() => setCartOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <RiCloseFill
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          <div
                            className="thumbcursor rounded m-[2.5vw] sm:m-3 p-[2.5vw] sm:p-3 bg-white/60 backdrop-blur-md text-[2.9vw] sm:text-sm md:text-base"
                            onClick={() => setCartOpen(false)}
                          >
                            <p>Nothing in your cart!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <style jsx>{`
 @media only screen and (max-width: 1024px) {
  div {
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  div::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`}</style>
    </>
  );
}
