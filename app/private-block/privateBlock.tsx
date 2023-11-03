
"use client";
import React from 'react'
import AOS from "aos";
import  { useEffect } from "react";
const PrivateBlock = () => {
    useEffect(() => {
        // Initialize AOS once the app is mounted
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Only animate once
        });
      }, []);
  return (
    <div>
      <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex lg:justify-end justify-center"
                // style={{ opacity: 1 }}
              >
                <div
                  className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                  style={{
                    boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)",
                  }}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z"
                      fill="#5C96FD"
                    />
                  </svg>

                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black ">
                    Mitigating Market Impact
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    Our strategic approach ensures that your transactions have a
                    minimal impact on the market price, even in the case of
                    large block sales.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex lg:justify-start justify-center"
              >
                <div
                  className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                  style={{
                    boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)",
                  }}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z"
                      fill="#5C96FD"
                    />
                  </svg>
                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                    Maximizing Returns
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    We focus not just on providing immediate liquidity, but also
                    on ensuring that you receive the best possible return on
                    your securities.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex lg:justify-end justify-center"
              >
                <div
                  className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                  style={{
                    boxShadow: "20px 30px 70px rgba(219, 222, 225, 0.4)",
                  }}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z"
                      fill="#5C96FD"
                    />
                  </svg>
                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                    Flexibility
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    Whether you’re looking for a quick exit or a gradual
                    sell-off, our dual-structured solutions cater to your unique
                    needs.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex lg:justify-start justify-center"
              >
                <div
                  className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                  style={{
                    boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)",
                  }}
                >
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z"
                      fill="#5C96FD"
                    />
                  </svg>
                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                    Symbiotic Approach
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    Our Private Block Purchase is designed to benefit all
                    parties involved – us, the issuer, and the shareholder.
                  </p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default PrivateBlock
