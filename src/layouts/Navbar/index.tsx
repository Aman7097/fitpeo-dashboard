import React from 'react';

import Profile from '../../../public/svg/Profile.svg';
import Search from '../../../public/svg/Search.svg';
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className='fixed z-10 flex w-full items-center bg-gray-900 p-4 md:w-[82%]'>
        <div className='flex w-full flex-wrap items-center justify-between px-1 md:flex md:pl-10'>
          {/* Brand */}
          <a
            className='inline-block text-sm font-semibold uppercase text-white'
            href='#pablo'
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          {/* Form */}
          <form className='mr-3 hidden flex-row flex-wrap md:flex lg:ml-auto'>
            <div className='relative flex w-full flex-wrap items-center justify-between gap-x-8 '>
              <span className='text-blueGray-300 absolute z-10 h-full w-8 items-center justify-center rounded bg-transparent pl-3 text-center text-base font-normal leading-snug'>
                <i className='fas fa-search'></i>
              </span>
              <span className='flex flex-row items-center gap-2 rounded-lg bg-slate-100 pl-2'>
                <Search className='flex h-5 w-5' />
                <input
                  type='text'
                  placeholder='Search here...'
                  className='placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white  px-3 py-3 text-sm shadow outline-none focus:outline-none focus:ring-1'
                />
                {/* <Search className='flex h-6 w-6 pr-2' /> */}
              </span>
              <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200'>
                <Profile className='flex h-4 w-4' />
              </div>
            </div>
          </form>
          <form className='flex w-[25%] flex-row flex-wrap items-center md:hidden '>
            {/* <Profile className='flex h-2 w-2' /> */}
            <input
              type='text'
              placeholder='Search here...'
              className='relative w-full rounded border-0 bg-white  px-1 py-1 text-sm shadow outline-none focus:outline-none focus:ring-1'
            />
            {/* <Search className='flex h-4 w-4 pr-1' /> */}
          </form>

          {/* User */}
          {/* <ul className='hidden list-none flex-col items-center md:flex md:flex-row'> */}
          {/* <UserDropdown /> */}
          {/* </ul> */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Navbar;
