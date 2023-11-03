"use client";
import React, { useEffect } from "react";
import Aos from "aos";

const EquityLine = () => {
    useEffect(() => {
        // Initialize AOS once the app is mounted
        Aos.init({
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
              >
                <div
                  className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                  style={{
                    boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6001 10.024V0C9.14184 0.365557 5.94128 1.99812 3.61515 4.5831C1.28903 7.16807 0.00195313 10.5225 0.00195312 14C0.00195313 17.4775 1.28903 20.8319 3.61515 23.4169C5.94128 26.0019 9.14184 27.6344 12.6001 28V17.976C11.8047 17.6465 11.1193 17.0979 10.6236 16.394C10.1279 15.6901 9.84229 14.8599 9.80006 14C9.84229 13.1401 10.1279 12.3099 10.6236 11.606C11.1193 10.9021 11.8047 10.3535 12.6001 10.024ZM18.0001 12.6H28.0001C27.7313 9.34813 26.3175 6.29709 24.0102 3.98983C21.703 1.68256 18.6519 0.268757 15.4001 0V10.024C16.0099 10.2102 16.5654 10.542 17.0183 10.9908C17.4713 11.4396 17.8083 11.9919 18.0001 12.6ZM15.4001 17.976V28C18.6519 27.7312 21.703 26.3174 24.0102 24.0102C26.3175 21.7029 27.7313 18.6519 28.0001 15.4H18.0001C17.8083 16.0081 17.4713 16.5604 17.0183 17.0092C16.5654 17.458 16.0099 17.7898 15.4001 17.976Z"
                      fill="#5C96FD"
                    />
                  </svg>

                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black ">
                    Control Over Capital Raising
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    Unlike convertible debt structures that can lead to
                    unpredictable dilution, our ELOCs give you the power to
                    determine how much capital you want to raise, and when. This
                    control can prove invaluable in managing your company’s
                    growth and in maintaining the trust and confidence of your
                    investor base.
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
                    height="28"
                    viewBox="0 0 29 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.1002 5.895H20.3002V2.947C20.3045 2.56274 20.2329 2.1814 20.0892 1.82496C19.9456 1.46851 19.7329 1.144 19.4634 0.870087C19.1938 0.596178 18.8728 0.378289 18.5187 0.228962C18.1646 0.0796355 17.7845 0.00182158 17.4002 0L11.6002 0C11.2159 0.00182158 10.8358 0.0796355 10.4817 0.228962C10.1276 0.378289 9.80654 0.596178 9.53699 0.870087C9.26745 1.144 9.05475 1.46851 8.91114 1.82496C8.76752 2.1814 8.69583 2.56274 8.70019 2.947V5.895H2.90019C2.51655 5.8968 2.13708 5.97471 1.78376 6.1242C1.43044 6.2737 1.11029 6.49181 0.841865 6.76591C0.573438 7.04001 0.362066 7.36465 0.219992 7.72102C0.0779175 8.07739 0.00796532 8.45841 0.0141872 8.842L0.000187248 25.053C-0.00416901 25.4373 0.067524 25.8186 0.211139 26.175C0.354754 26.5315 0.567454 26.856 0.836995 27.1299C1.10654 27.4038 1.42759 27.6217 1.78168 27.771C2.13577 27.9204 2.5159 27.9982 2.90019 28H26.1002C26.4845 27.9982 26.8646 27.9204 27.2187 27.771C27.5728 27.6217 27.8938 27.4038 28.1634 27.1299C28.4329 26.856 28.6456 26.5315 28.7892 26.175C28.9329 25.8186 29.0045 25.4373 29.0002 25.053V8.842C29.0045 8.45774 28.9329 8.0764 28.7892 7.71996C28.6456 7.36351 28.4329 7.039 28.1634 6.76509C27.8938 6.49118 27.5728 6.27329 27.2187 6.12396C26.8646 5.97464 26.4845 5.89682 26.1002 5.895ZM17.4002 5.895H11.6002V2.947H17.4002V5.895Z"
                      fill="#5C96FD"
                    />
                  </svg>
                  <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                    Predictable Dilution
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    With our ELOCs, you can accurately calculate the dilution
                    that your financing will cause. This level of predictability
                    allows you to make strategic decisions and maintain your
                    company’s financial health in the long run.
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
                    Compliance with Registration Statements
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    Our ELOCs require an S1 registration statement, ensuring
                    full compliance with regulatory requirements.
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
                    Interim Bridge Terms
                  </div>

                  <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                    While the registration statement is in process, we offer
                    bridge terms that provide you with the necessary funds and
                    protect you from being forced into a toxic funding
                    situation.
                  </p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default EquityLine
