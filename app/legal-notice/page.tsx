import React from "react";

const LegalNotice = () => {
  return (
    <div>
      <div>
        <div className="overflow-hidden  sm:-mx-[250px]  lg:-mx-[150px] ">
          <div className="relative ">
            <img
              src="/assets/images/banner-lefticon.png"
              alt="banner-lefticon"
              className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]"
            />
            <img
              src="/assets/images/banner-rightIcon.png"
              alt="banner-rightIcon"
              className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
            />
            <div className="container  pt-14">
              <div className="heading text-center mb-6 ">
                <h4 className="font-extrabold">
                  Legal Notice
                  <span className="text-primary"> & Disclaimer</span>{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.318 10.364L24.938 6.8L28.5 5.182L24.938 3.563L23.318 0L21.7 3.563L18.136 5.182L21.7 6.8L23.318 10.364ZM13.602 11.012L10.364 3.886L7.125 11.011L0 14.25L7.125 17.489L10.364 24.614L13.6 17.489L20.725 14.25L13.602 11.012ZM23.318 18.137L21.7 21.7L18.138 23.319L21.7 24.938L23.318 28.5L24.937 24.938L28.5 23.318L24.938 21.7L23.318 18.137Z"
                    fill="#5C96FD"
                  />
                </svg>
              </div>

              <div className=" flex justify-center text-center items-end ">
                <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">
                  {/* <!-- <p className="pt-30 lg:pt-6">Last updated: April 19, 2023</p> --> */}

                  <p className="pt-30 lg:pt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 md:py-[100px]">
          <div className="container">
            <div className="pb-12">
              {/* <!-- <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Who we are</h4> --> */}
              <p className="pb-5 text-lg font-medium">
                The information contained herein is presented solely for the
                purposes of discussion and under no circumstances should this be
                considered an offer to buy or a solicitation of an offer to sell
                any security. Liqueous LP is not a registered securities
                broker-dealer or an investment adviser with the U.S. Securities
                and Exchange Commission (the “SEC”) or with any state securities
                regulatory authority. Liqueous LP, its managers or affiliates
                have not been registered and do not plan to be registered under
                the Investment Advisers Act of 1940 or any similar state or
                foreign securities laws. Liqueous LP is not registered under the
                Investment Company Act of 1940 or under any similar state or
                international securities laws. Liqueous LP does not offer any
                form of investment (buy or sell) advice, tax counseling, estate
                planning, or any other securities or financial advice
                whatsoever. No statements on this website or any verbal or
                written statement by any representative shall be construed as
                such advice. We are neither licensed nor qualified to provide
                investment advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
export function generateMetadata() {
  return {
    title: "Legal Notice | Liqueous",
    description: "Legal Notice Page",
  };
}
