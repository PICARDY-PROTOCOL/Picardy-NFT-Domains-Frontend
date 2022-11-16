import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import sbtDomainAbi from '../constants/sbtDomainAbi.json';
import sbtFactoryAbi from '../constants/sbtFactoryAbi.json';
import { config } from '../constants';

const GetProof = () => {
  const { address } = useAccount();
  const [requestId, setRequestId] = useState('');
  const [nullifier, setNullifier] = useState('');
  const [proof, setProof] = useState('');

  return (
    <div>
      <h1>Hello Get</h1>
    </div>
  );
};

export default GetProof;
