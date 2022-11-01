import joinClassNames from '../utils/joinClassNames';
import Link from 'next/link';
import { useState } from 'react';

const DashboardNav = ({ page }) => {
  const [active, setActive] = useState('Profile');
  const [toggle, setToggle] = useState(false);

  let navigation = [
    {
      name: 'Profile',
      href: '/profile',
    },
    {
      name: 'Buy Domain',
      href: '/buy-domain',
    },
    {
      name: 'Search',
      href: '/search',
    },
    {
      name: 'Send Tokens',
      href: '/send-tokens',
    },
  ];

  return (
    <>
      <nav
        className="hidden  py-6 items-center h-[300px] w-[250px] absolute left-0 top-0 right-0 pt-[40px] navbar md:mt-[500px] mt-0 md:border-r-2 md:border-white md:block"
        aria-label="Sidebar"
      >
        <ul className="list-none ml-10 pl-16 flex flex-col sm:flex justify-start items-start gap-6 flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === item.name
                  ? 'text-white bg-dashboardnav-gradient p-1 px-6 rounded-xl'
                  : 'text-dimWhite hover:opacity-80'
              } `}
            >
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default DashboardNav;
