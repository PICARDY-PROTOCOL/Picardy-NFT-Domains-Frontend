import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import DomainCard from '../components/DomainCard';

const Profile = () => {
  return (
    <div className="w-full h-full mt-12 text-white black-bg-gradient">
      <ProfileHeader />

      <div className="flex items-center mt-20">
        <ProfileInfo />

        <div className="flex flex-col ">
          <h3 className=" text-2xl md:ml-[280px]">Domains</h3>
          
          <DomainCard />
          <DomainCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
