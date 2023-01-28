import React from 'react'

const MenuButton = () => {
    return (
    <div class="relative py-3 sm:max-w-xl mx-auto">
    <nav x-data="{ open: false }">
                <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onclick={"open = !open"}>
            <span class="sr-only"></span>
            <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" ></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" ></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" ></span>
            </div>
        </button>
    </nav>
            </div>
  )
}

export default MenuButton