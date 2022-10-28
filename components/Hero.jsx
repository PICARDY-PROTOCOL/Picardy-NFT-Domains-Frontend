import styles from '../helper/style';
import Head from 'next/head';
import Rectangle from './svg/Rectangle';

const Hero = () => {
  return (
    <section id="home" className={`md:flex-row flex-col ${styles.paddingY}`}>
      <Head>
        <title>Home | Picardy</title>
        <meta
          name="description"
          content="Create your online event on the blockchain"
        />
      </Head>
      <div
        className={`flex items-center flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-4`}
      >
        <div className="w-3/4 text-center mt-2">
          <h1 className="text-center text-gradient font-poppins font-semibold ss:text-[58px] text-[40px] flex-wrap text-white ss:leading-[100.8px] leading-[75px]">
            Permissionless NFT Domains
          </h1>
        </div>

        <p className={`${styles.paragraph} text-center mb-4 mt-2`}>
          Mint your identity on the Blockchain
        </p>
      </div>

      <div className={`${styles.flexCenter} md:my-0 my-10 relative`}>
        <Rectangle />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
