import React, { useState, useEffect } from 'react';
import sbtResolverAbi from '../constants/sbtResolver.json';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { config } from '../constants';
import DomainCard from './DomainCard';

const tld = '.picardy';

const SbtDomains = () => {
  const { address, isConnected } = useAccount();
  const [response, setResponse] = useState({});

  const getSbtProfileDetails = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sbtDomainResolver = new ethers.Contract(
      config.sbtResolverAddress,
      sbtResolverAbi,
      signer
    );

    const defaultSbtDomain = await sbtDomainResolver.getDefaultDomain(
      address,
      tld
    );
    console.log(defaultSbtDomain);

    const domainUri = await sbtDomainResolver.getDomainTokenUri(
      defaultSbtDomain,
      tld
    );
  };

  return <div>SbtDomains</div>;
};

export default SbtDomains;
