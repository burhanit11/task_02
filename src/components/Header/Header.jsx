import React from "react";
import { routes } from "../../routes";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/svg/3dot link logo final-01 1.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="header ">
      <header class="text-gray-600 body-font flex justify-between content-center ">
        <div class="container  flex flex-wrap p-5  md:flex-row content-center    items-center">
          <div className="">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={logo} alt="logo" className="h-[111px]  w-[103.75px]" />
            </a>
          </div>
          <div>
            <nav
              className=" flex  items-end justify-between  lg:px-8"
              aria-label="Global"
            >
              <div className="flex lg:flex-1"></div>

              <Popover.Group className="hidden md:flex "></Popover.Group>
              <div className="hidden md:flex md:flex-1 md:justify-end ">
                {routes.map((route) => (
                  <a
                    class="md:mx-5 mx-1 text-white active:text-primary hover:text-primary leading-[24.2px] lg:font-samibold lg:text-[20px] text-[10px]"
                    key={route?.path}
                  >
                    {route?.name}
                  </a>
                ))}
                <button class=" items-center bg-primary font-samibold lg:text-[20px] md:[10px] leading-[24.2px] border-0 py-2 px-3 focus:outline-none lg:w-40 md:w-28 rounded text-white mt-4 md:mt-0">
                  Connect Wallet
                </button>
              </div>
            </nav>
            <Dialog
              as="div"
              className="lg:hidden"
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
            >
              <div className="fixed inset-0 z-10" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {routes.map((route) => (
                        <a
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          key={route?.path}
                        >
                          {route?.name}
                        </a>
                      ))}
                      <button class="inline-flex items-center bg-primary font-samibold text-[20px] leading-[24.2px] border-0 py-2 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
        <div className="flex md:hidden justify-end mx-10">
          <button
            type="button"
            className=" inline-flex items-center justify-end rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
