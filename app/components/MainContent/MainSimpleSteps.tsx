import { useState } from "react";
import Popup from "@/app/components/PopUp/Popup";
const SimpleSteps = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const handleClick = () => {
      setIsOpen(true);
     
    };
  //const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <section className="py-14 dark:bg-gray-dark lg:py-[100px]">
        <div className="container " id="trigger-div">
          <div className="heading text-center">
            <h4>Get a free quote in </h4>
            <h4>
              <span className="text-secondary">3</span> Simple Steps
            </h4>
            <div className="flex flex-row-reverse">
              <svg
                width="41"
                height="25"
                viewBox="0 0 41 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                  fill="#6C4FFE"
                />
              </svg>
            </div>
          </div>

          <div className="relative z-1 lg:flex">
            <div className="rotate-180 hidden sm:block ">
              <svg
                width="41"
                height="25"
                viewBox="0 0 41 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                  fill="#6C4FFE"
                />
              </svg>
            </div>

            <div className="mx-auto heading text-center lg:pt-8 lg:mb-0 lg:w-1/2 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right  flex justify-center">
              <div className="mx-auto ">
                <div className="mx-auto text-center flex justify-center ">
                  <div className="ml-0.5 font-bold text-white  rounded-3xl bg-primary flex items-center justify-center font-mono text-4xl h-20 w-20">
                    1
                  </div>
                </div>
                <div className="ml-2 text-center">
                  <h5 className="mb-0 text-xl pt-4 tracking-tight text-black dark:text-gray">
                    Select Company or symbol, &
                  </h5>
                  <p className="mb-0 text-xl text-primary dark:text-gray">
                    {" "}
                    Choose Core Program
                  </p>
                </div>

                <div className=" py-4 flex justify-center">
                  <div className="border-l-8 border-dotted h-12 "></div>
                </div>

                <div className="mx-auto text-center flex justify-center ">
                  <div className="ml-0.5 font-bold text-white  rounded-3xl bg-secondary flex items-center justify-center font-mono text-4xl h-20 w-20">
                    2
                  </div>
                </div>
                <div className="ml-2  text-center">
                  <h5 className="mb-0 text-xl pt-4 tracking-tight text-black dark:text-gray">
                    Fill in the form details, &
                  </h5>
                  <p className="mb-0 text-xl text-primary dark:text-gray">
                    Submit Query
                  </p>
                </div>

                <div className=" py-4 flex justify-center">
                  <div className="border-l-8 border-dotted h-12 "></div>
                </div>

                <div className="mx-auto text-center flex justify-center ">
                  <div className="ml-0.5 font-bold text-white  rounded-3xl bg-gray flex items-center justify-center font-mono text-4xl h-20 w-20">
                    3
                  </div>
                </div>
                <div className="ml-2  text-center">
                  <h5 className="mb-0 text-xl pt-4 tracking-tight text-black dark:text-gray">
                    Get an instant liquidity{" "}
                  </h5>
                  <p className="mb-0 text-xl text-black dark:text-gray">
                    option, right away!
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white px-8 pt-8 dark:bg-[#101626] lg:w-1/2 lg:px-8">
              <div className="heading text-center">
                <h4>How it works </h4>

                <div className="mt-8 flex text-left text-lg">
                  <span>
                    <p className="font-semibold">Submit Your Application:</p>
                    <p className="mb-4">
                      Start by submitting your application on our user-friendly
                      platform.
                    </p>

                    <p className="font-semibold">Explore Options:</p>
                    <p className="mb-4">
                      We assess your needs and present tailored liquidity
                      options, empowering you to choose what aligns with your
                      financial goals.
                    </p>

                    <p className="font-semibold">Accept Your Option:</p>
                    <p className="mb-4">
                      Review and select the option that suits you best for a
                      seamless and customized experience.
                    </p>

                    <p className="font-semibold">Get Your Agreement:</p>
                    <p className="mb-4">
                      Once you choose, we'll send a hassle-free digital
                      agreement for a smooth, secure transaction.
                    </p>

                    <p className="my-4">
                      That's it! We make accessing financial support easy and
                      fast with a user-centric approach, ensuring you're in
                      control at every step.
                    </p>
                  </span>
                </div>

                <button className="mt-4 btn mx-auto block w-fit mr-auto ml-auto bg-primary text-white rounded-full" onClick={handleClick}>
                  GET QUOTE
                  
                </button>
             {isOpen && <Popup setIsOpen={setIsOpen}/>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SimpleSteps;
