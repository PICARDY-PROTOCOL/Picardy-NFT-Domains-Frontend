import React from 'react';
import DomainName from './svg/DomainName';
import styles from '../helper/style';

const domain = 'esse.3rd';
const communityName = '.3rd';

const DomainCard = () => {
  return (
    <div
      className={`h-full md:flex-row flex-col ${styles.paddingY} md:ml-[250px]`}
    >
      <div
        className={`feature-bal rounded-none mx-0 block items-center justify-between flex-1 ${styles.flexStart} flex-col gap-6 py-10 md:flex-row md:mx-[30px] md:rounded-2xl xl:px-0 sm:px-32 px-6`}
      >
        <div className="flex gap-10 items-center">
          <div>
            <DomainName />
          </div>

          <div>
            <div>
              <h2 className="mb-2 font-bold text-xl">{domain}</h2>
              <p className="mb-2">A Domain issued to {communityName} members</p>
            </div>

            <div className="flex flex-row gap-8 text-stone-400 ">
              <button className="hover:opacity-80">Edit domain data</button>
              <button className="hover:opacity-80">Transfer Domain</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;
