import { useState } from 'react';
import Link from 'next/link';

import { logo } from '../public/assets';
import { navLinks } from '../constants';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="max-w-7xl flex py-6 justify-between px-4 sm:px-8 items-center ">
      <Link href="/" className="ml-5">
        <Image src={logo} alt="picardy" className=" h-[32px]" />
      </Link>

      <ul className="list-none font-bold ml-24 cursor-pointer sm:flex hidden justify-center items-center flex-1 ">
        {navLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.href}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 hover:opacity-80 ${
              active === nav.name ? 'text-white' : 'text-dimWhite'
            } `}
          >
            <span className="truncate">{nav.name}</span>
          </Link>
        ))}
      </ul>

      <div>
        <ConnectButton
          showBalance={false}
          chainStatus="name"
          accountStatus="address"
        />
      </div>

      {/* <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <ConnectButton />
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
