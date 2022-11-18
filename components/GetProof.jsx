import { useState, useEffect, useContext } from 'react';
import { DomainContext } from '../context/context';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import sbtDomainAbi from '../constants/sbtDomainAbi.json';
import sbtFactoryAbi from '../constants/sbtFactoryAbi.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from '../constants';

const tld = '.picardy';

const GetProof = () => {
  const { address } = useAccount();
  const userDomainName = useContext(DomainContext);
  const [requestId, setRequestId] = useState('');
  const [nullifier, setNullifier] = useState('');
  const [proof, setProof] = useState('');
  const [sbtTld, setSbtTld] = useState('');

  const notify = () =>
    toast(
      'Congrats: Your proof is httttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt'
    );

  const domainName = userDomainName.mintedName;

  const handleSubmit = (e) => {
    toast('Uploading Post', {
      className: 'info-toast',
      draggable: true,
    });
  };

  const getZkProof = async (e) => {
    e.preventDefault();

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const sbtFactory = new ethers.Contract(
      config.sbtFactoryAddress,
      sbtFactoryAbi,
      signer
    );

    const requestRandomNumber = async (e) => {
      e.preventDefault();

      const requestRandomTx = await sbtFactory.requestRandomNumber(3);
      const requestReceipt = await requestRandomTx.wait();
      const event = await requestReceipt.events.find(
        (event) => event.event === 'RequestSent'
      );
      const requestId = event.args.requestId;
      setRequestId(requestId);
    };

    // simple calculation to get proof Input: TODO: update zk circuit
    const circuitInput = (randNums) => {
      let proofInput = [];
      const num = randNums[0] + randNums[1] + randNums[2];
      const sqr = num * num;
      proofInput.push(num, sqr);
      return { input: proofInput };
    };

    const confirmRandomNumber = async (e) => {
      e.preventDefault();

      if (!checkFulfilled(requestId)) {
        console.log('not fulfilled');
      } else {
        const confirm = await sbtFactory.confirmRandNumber(
          requestId,
          domainName,
          tld
        );
        const confirmReceipt = await confirm.wait();
        console.log(confirmReceipt);
      }
    };

    const getProof = async (e) => {
      e.preventDefault();

      const { 0: randomNumbers, 1: nullifier } = await sbtFactory.randDetails(
        requestId,
        domainName,
        tld
      );
      setNullifier(nullifier);
      const body = circuitInput(randomNumbers);
      const response = await axios.post(
        'http://localhost:8080/zk/generateProof',
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
    };

    //this checks that the random request Has been fulfilled
    const checkFulfilled = async (e) => {
      e.preventDefault();
      setFulfilled[await sbtFactory.checkFulfilled(requestId)];
    };
  };

  return (
    <div>
      <button
        className="text-stone-300  italic items-center hover:opacity-80 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-700 rounded-xl px-3 py-1 shadow-2xl"
        onClick={handleSubmit}
      >
        Get Proof
      </button>
      <ToastContainer />
    </div>
  );
};

export default GetProof;
