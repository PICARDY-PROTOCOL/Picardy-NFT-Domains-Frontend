import React from 'react';
import ProfileRectangle from './svg/ProfileRectangle';
import { FaWallet } from 'react-icons/fa';
import styles from '../helper/style';
import Head from 'next/head';

const dummyBalance = 80;
const dummyAddress = '0xhh8495mo04nv847360hj50';

const ProfileHeader = () => {
  return (
    <section className={` bg-black md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`feature-bal rounded-none mx-0 block items-center justify-between flex-1 ${styles.flexStart} flex-col gap-6 py-10 md:flex-row md:mx-[100px] md:rounded-2xl xl:px-0 sm:px-32 px-6`}
      >
        <div>
          <ProfileRectangle />
        </div>

        <div className="flex justify-between  black-orange-gradient w-full p-10 rounded-2xl">
          <div>
            <h1>Balance:</h1>
            <p>{dummyBalance} ETH</p>
          </div>

          <div className="bg-gray-400 p-3 rounded-xl">
            <FaWallet className="text-2xl" />
          </div>
        </div>

        <div className="flex gap-8 justify-between black-orange-gradient w-full p-10 rounded-2xl">
          <div>
            <h1>Address:</h1>
            <p>{dummyAddress}</p>
          </div>

          <div className="bg-gray-400 p-3 rounded-xl">
            <FaWallet className="text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
