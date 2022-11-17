import { useState, useEffect, useContext } from 'react';
import { DomainContext } from '../context/context';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import sbtDomainAbi from '../constants/sbtDomainAbi.json';
import sbtFactoryAbi from '../constants/sbtFactoryAbi.json';
import { config } from '../constants';

const tld = '.picardy';

const GetProof = () => {
  const { address } = useAccount();
  const userDomainName = useContext(DomainContext);
  const [requestId, setRequestId] = useState('');
  const [nullifier, setNullifier] = useState('');
  const [proof, setProof] = useState('');
  const [sbtTld, setSbtTld] = useState('');

  const domainName = userDomainName.mintedName;

  const getZkProof = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sbtFactory = new ethers.Contract(
      config.sbtFactoryAddress,
      sbtFactoryAbi,
      signer
    );

    const requestRandomTx = await sbtFactory
      .requestRandomNumber(3)
      .then((res) => {
        requestRandomTx.wait(2);
        setRequestId(res);
        console.log(requestRandomTx.transactionHash);
      })
      .catch((err) => {
        console.log(err);
      });

    const { 0: randNumbers, 1: nullifier } = await sbtFactory.getRandNumber(
      requestId,
      domainName,
      tld
    );

    setNullifier(nullifier);

    const body = circuitInput(randNumbers);
    const response = await axios.post(
      `https://localhost:5000/zk/generateProof`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const message = response.message;
    const result = { nullifier: nullifier, proof: response.proof };
    setProof(JSON.stringify(result));

    // simple calculation to get proof Input: TODO: update zk circuit
    const circuitInput = (randNums) => {
      let proofInput = [];
      const num = randNumbers[1] + randNumbers[2] + randNumbers[3];
      const sqr = num * num;
      proofInput.push(num, sqr);
      return { input: proofInput };
    };
  };

  return (
    <div>
      <h1>Hello Get</h1>
    </div>
  );
};

export default GetProof;
