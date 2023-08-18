"use client"
import AOS from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

const privateBlock = () => {
  useEffect(() => {
    // Initialize AOS once the app is mounted
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
        <div className="overflow-hidden   sm:-mx-[250px]  lg:-mx-[150px] ">
          <div className="relative bg-gradient-to-r to-transparent">
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
            <div className="container  lg:p-14 p-4">
              <div className="heading text-center mb-3 font-extrabold">
                <h4 className="">Unlock Value and optimize Returns </h4>
                <h4> with Our Private Block Purchase Solutions</h4>
              </div>
              <div className="relative">
                <div>
                  <img
                    src="/assets/images/p-Grid.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute top-0 left-0">
                  <img src="/assets/images/Graphics-Top.svg" />
                </div>
              </div>

              <div className=" flex justify-center text-center items-end ">
                <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">
                  <p className="mt-4 pt-30 lg:pt-3">
                    Managing high-risk equity positions often entails walking a
                    tightrope between mitigating risk and maximizing return.
                    This is particularly true for individuals, hedge funds, and
                    family offices holding concentrated equity positions in
                    volatile market conditions. At Liqueous, we specialize in
                    Private Block Purchase, providing a symbiotic solution that
                    benefits all parties - us, the issuer, and the shareholder.
                  </p>

                  <Link href="/get-estimate">
                    {" "}
                    <button
                      type="button"
                      className="btn my-5 px-9 text-white rounded-full"
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div className="container lg:mt-[100px] mt-[50px]">
            <div className="heading text-center">
              <div className="flex justify-center">
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

              <h4 className="font-extrabold">Explore Our Dual Structured</h4>
              <h4 className="font-extrabold">
                {" "}
                <span className="text-primary"> Private Block </span>
                Purchase
              </h4>

              <p>
                Liqueous offers two distinct structures for Private Block
                Purchase,{" "}
              </p>
              <p>designed to cater to unique liquidity needs and financial </p>
              <p>circumstances:</p>
            </div>
            <div className="flex justify-center">
              <div className="grid items-center gap-16 md:grid-cols-2 lg:grid-cols-2 xl:items-start  lg:w-4/5 w-full ">
                <div className="lg:order-2 order:1  lg:col-auto flex justify-center items-center">
                  <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                    {/* <div className=" flex justify-center items-center  lg:w-[26rem] w-[20rem] lg:h-[24rem] h-[26rem]  bg-[#f3f3fe]  rounded-xl ">  */}
                    <div className=" w-full lg:h-[24rem] h-[24rem] bg-white rounded-xl p-5 border-[28px] border-[#f3f3fe]">
                      <div className="flex justify-center lg:block">
                        <svg
                          width="29"
                          height="29"
                          viewBox="0 0 29 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 18.3891C0 20.3888 0.593 22.3437 1.70401 24.0064C2.81502 25.6692 4.39414 26.9651 6.24169 27.7304C8.08923 28.4957 10.1222 28.6959 12.0836 28.3058C14.0449 27.9157 15.8465 26.9527 17.2606 25.5386C18.6746 24.1246 19.6376 22.323 20.0277 20.3616C20.4179 18.4003 20.2176 16.3673 19.4523 14.5198C18.6871 12.6722 17.3911 11.0931 15.7284 9.98209C14.0656 8.87108 12.1108 8.27808 10.111 8.27808C7.4294 8.27808 4.85762 9.34334 2.96144 11.2395C1.06526 13.1357 0 15.7075 0 18.3891Z"
                            fill="#5C96FD"
                          />
                          <path
                            d="M9.78432 4.56402C9.74418 4.62232 9.72099 4.69061 9.71731 4.7613C9.71364 4.83199 9.72963 4.90232 9.7635 4.96447C9.79737 5.02663 9.84781 5.07818 9.90921 5.1134C9.97061 5.14863 10.0406 5.16615 10.1113 5.16402C11.8479 5.16402 13.5675 5.50611 15.1719 6.17077C16.7762 6.83542 18.2339 7.80962 19.4617 9.03771C20.6896 10.2658 21.6634 11.7237 22.3277 13.3283C22.992 14.9328 23.3337 16.6524 23.3333 18.389C23.3312 18.4598 23.3487 18.5297 23.3839 18.5911C23.4192 18.6525 23.4707 18.703 23.5329 18.7368C23.595 18.7707 23.6653 18.7867 23.736 18.783C23.8067 18.7794 23.875 18.7562 23.9333 18.716C25.0972 17.8489 26.0608 16.7414 26.7586 15.4687C27.4564 14.1961 27.872 12.7881 27.9773 11.3406C28.0826 9.89299 27.875 8.43972 27.3687 7.0795C26.8623 5.71929 26.0691 4.48401 25.043 3.45761C24.0168 2.43121 22.7817 1.63775 21.4216 1.13113C20.0615 0.624519 18.6082 0.416632 17.1606 0.521597C15.713 0.626562 14.305 1.04192 13.0322 1.73945C11.7594 2.43697 10.6517 3.40032 9.78432 4.56402Z"
                            fill="#5C96FD"
                          />
                        </svg>
                      </div>

                      <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                        Structured Partial Closings
                      </h5>

                      <p className="mb-3 font-normal text-gray dark:text-gray-400">
                        For those seeking a gradual exit, we structure the sale
                        in multiple closings. This option offers a smaller
                        discount to the market price, mitigating price impact
                        from concentrated selling while maximizing overall
                        return over time.
                      </p>
                    </div>
                    {/* <!-- </div> --> */}
                  </div>
                </div>
                <div className="lg:order-1 mx-auto  order:2 md:mx-0 flex justify-center   ">
                  {/* <!-- <div className=" flex justify-center items-center  lg:w-[26rem] w-[20rem] lg:h-[24rem] h-[26rem]  bg-[#f3f3fe] rounded-xl  "> --> */}
                  <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                    <div className=" w-full  lg:h-[24rem] h-[24rem] bg-white rounded-xl p-5 border-[28px] border-[#f3f3fe]">
                      <div className="flex justify-center lg:block">
                        <svg
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14 28.5C16.7689 28.5 19.4757 27.6789 21.778 26.1406C24.0803 24.6022 25.8747 22.4157 26.9343 19.8576C27.9939 17.2994 28.2712 14.4845 27.731 11.7687C27.1908 9.05301 25.8574 6.55845 23.8995 4.60051C21.9416 2.64258 19.447 1.30921 16.7313 0.769012C14.0155 0.228819 11.2006 0.506066 8.64243 1.56569C6.08427 2.62532 3.89777 4.41973 2.35943 6.72202C0.821086 9.02431 0 11.7311 0 14.5C0 18.213 1.475 21.774 4.1005 24.3995C6.72601 27.025 10.287 28.5 14 28.5ZM11.2 10.3C11.2 9.9287 11.3475 9.57261 11.6101 9.31006C11.8726 9.04751 12.2287 8.90001 12.6 8.90001H15.4C15.7713 8.90001 16.1274 9.04751 16.3899 9.31006C16.6525 9.57261 16.8 9.9287 16.8 10.3C16.8 10.6713 16.9475 11.0274 17.2101 11.29C17.4726 11.5525 17.8287 11.7 18.2 11.7C18.5713 11.7 18.9274 11.5525 19.1899 11.29C19.4525 11.0274 19.6 10.6713 19.6 10.3C19.6 9.1861 19.1575 8.11781 18.3698 7.33016C17.5822 6.5425 16.5139 6.10001 15.4 6.10001V4.70001C15.4 4.3287 15.2525 3.97261 14.99 3.71006C14.7274 3.44751 14.3713 3.30001 14 3.30001C13.6287 3.30001 13.2726 3.44751 13.0101 3.71006C12.7475 3.97261 12.6 4.3287 12.6 4.70001V6.10001C11.4861 6.10001 10.4178 6.5425 9.63015 7.33016C8.8425 8.11781 8.4 9.1861 8.4 10.3V11.082C8.40011 11.9635 8.67754 12.8225 9.19298 13.5375C9.70843 14.2526 10.4358 14.7873 11.272 15.066L15.843 16.59C16.1217 16.683 16.3641 16.8612 16.5358 17.0996C16.7076 17.3379 16.8 17.6242 16.8 17.918V18.7C16.8 19.0713 16.6525 19.4274 16.3899 19.69C16.1274 19.9525 15.7713 20.1 15.4 20.1H12.6C12.2287 20.1 11.8726 19.9525 11.6101 19.69C11.3475 19.4274 11.2 19.0713 11.2 18.7C11.2 18.3287 11.0525 17.9726 10.7899 17.7101C10.5274 17.4475 10.1713 17.3 9.8 17.3C9.4287 17.3 9.0726 17.4475 8.81005 17.7101C8.5475 17.9726 8.4 18.3287 8.4 18.7C8.4 19.8139 8.8425 20.8822 9.63015 21.6699C10.4178 22.4575 11.4861 22.9 12.6 22.9V24.3C12.6 24.6713 12.7475 25.0274 13.0101 25.29C13.2726 25.5525 13.6287 25.7 14 25.7C14.3713 25.7 14.7274 25.5525 14.99 25.29C15.2525 25.0274 15.4 24.6713 15.4 24.3V22.9C16.5139 22.9 17.5822 22.4575 18.3698 21.6699C19.1575 20.8822 19.6 19.8139 19.6 18.7V17.918C19.5999 17.0366 19.3225 16.1775 18.807 15.4625C18.2916 14.7474 17.5642 14.2127 16.728 13.934L12.157 12.41C11.8783 12.317 11.6359 12.1388 11.4642 11.9004C11.2924 11.6621 11.2 11.3758 11.2 11.082V10.3Z"
                            fill="#5C96FD"
                          />
                        </svg>
                      </div>

                      <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white ">
                        Concentrated Full Price Purchase
                      </h5>

                      <p className="mb-3 font-normal text-gray dark:text-gray-400 ">
                        We purchase your block of securities at a discount to
                        the market price in a single, concentrated transaction.
                        This option offers an immediate exit strategy and
                        instant liquidity, ideal for high-risk positions that
                        require a swift resolution.
                      </p>
                    </div>
                  </div>
                  {/* <!-- </div> --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:pt-[100px]">
          <div className="container ">
            <div className="heading text-center">
              <div className="flex justify-center">
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

              <h4 className="font-extrabold">Why Choose Liqueous for </h4>

              <h4 className="font-extrabold">
                <span className="text-primary"> Private Block </span>Purchase?
              </h4>
              <p>
                Our expertise lies in striking a balance between mitigating
                price{" "}
              </p>
              <p>
                impact from concentrated selling and maximizing overall return.
              </p>
              <p> Here’s what makes our Private Block Purchase stand out:</p>
            </div>
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
        </section>
        <section className="bg-white/50 dark:bg-black lg:px-14 px-0">
          <div className="container lg:mt-[50px]">
            <div className="heading text-center">
              <div className="flex justify-center">
                <img src="/assets/images/Star.svg" />
              </div>

              <h4 className="font-extrabold">
                {" "}
                Unlock the Power of{" "}
                <span className="text-primary font-extrabold"> Private </span>
              </h4>
              <h4 className="font-extrabold">
                <span className="text-primary "> Block Purchase </span> with
                Liqueous
              </h4>
            </div>

            <div className="grid items-center gap-2 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
              <div className="lg:order-2 order:1 md:col-span-2 lg:col-auto">
                <div className="text-center font-semibold md:text-left lg:text-left lg:p-10 ">
                  <p className="lg:pt-16 lg:px-0 px-4">
                    Experience a sophisticated approach to managing concentrated
                    equity positions. With Liqueous’s Private Block Purchase,
                    you can access the liquidity you need, optimize returns, and
                    navigate the complexities of the market with confidence.
                  </p>

                  {/* <!-- <a href="" className="btn mt-10 capitalize text-white">Contact Us</a> --> */}
                  <Link href="/get-estimate">
                    {" "}
                    <button
                      type="button"
                      className="btn mt-5  px-9 text-white rounded-full"
                    >
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
              <div className="lg:order-1 mx-auto  order:2 md:mx-0 ">
                <div className=" flex justify-center lg:w-5/6  ">
                  <img src="/assets/images/p-Left.svg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- <div className="relative container  lg:mt-[100px] my-[50px] "> --> */}
        {/* <!-- <div className="relative ">

            <div className="container   flex justify-center lg:my-[100px]">

                <div
                    className="lg:h-[15rem] h-[26rem] w-[64rem] bg-[#eff6ff] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                    <div className="flex h-full w-full justify-between ">

                    </div>

                </div>
            </div>
        </div> --> */}

        <div className=" container  flex justify-center lg:my-[100px] my-[50px]  ">
          <div className="lg:h-[14rem] h-[22rem] lg:w-[60rem] rounded-xl bg-white flex justify-center items-center border-[26px] border-[#eff6ff] w-full dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">
            <div className="w-11/12  ">
              <div className="lg:flex justify-between ">
                <div className="flex items-center justify-center ">
                  <div className="flex-auto w-65 text-center lg:text-start  ">
                    <h2 className="text-2xl font-extrabold text-black dark:text-white">
                      {" "}
                      Unlock the power of
                      <span className="text-secondary text-2xl">
                        {" "}
                        Private Block
                      </span>{" "}<br/>
                      Purchase
                    </h2>
                    <h2 className="text-2xl font-extrabold text-black dark:text-white">
                      {" "}
                      with <span className="text-primary">Liqueous </span>today.
                    </h2>
                  </div>
                </div>
                <div className="flex-auto w-35 flex lg:justify-end justify-center ">
                  <img src="/assets/images/b-Graphics.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- </div> --> */}
      </div>
    </div>
  );
};

export default privateBlock;
