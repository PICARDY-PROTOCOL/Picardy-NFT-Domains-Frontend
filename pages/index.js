import styles from '../helper/style';
import { Footer, Navbar, Minter, Hero, Description, Faq } from '../components';

import { faqQuestions } from '../constants';

export default function Home() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`bg--black-gradient-2 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Minter />
          <Description />
          <div className="text-white mt-28">
            <h1 className="text-4xl text-center">
              Frequently Asked Questions (FAQS)
            </h1>
            <p className="text-center mt-8">
              If your question is not answered below, please read the docs or
              get in touch with the team.
            </p>
            {faqQuestions.map((faq) => (
              <Faq key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
