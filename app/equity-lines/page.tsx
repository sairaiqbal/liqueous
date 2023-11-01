"use client"
import Aos from 'aos';
import Link from 'next/link'
import React, { useEffect } from 'react'
import ApplyNowButton from '../components/ApplyNowButton';

const equityLines = () => {
  useEffect(() => {
    // Initialize AOS once the app is mounted
    Aos.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
    <div className="overflow-hidden   sm:-mx-[250px]  lg:-mx-[150px] ">
        <div className="relative bg-gradient-to-r to-transparent">
            <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon"
                className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
            <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon"
                className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
            <div className="container  lg:p-14 p-4">

                <div className="heading text-center mb-3">
                    <h4 className="font-extrabold">Equity Lines of Credit</h4>
                    <p>Unlock Your Enterprise’s Potential with Our</p>
                        <p> Bespoke Equity Lines of Credit</p>


                </div>
                <div className="relative">
                    <div>
                        <img src="/assets/images/e-Hexagons.svg" className="w-full h-full"/>
                    </div>
                    <div className="absolute top-0 left-0">
                        <img src="/assets/images/e-Top.svg"/>
                    </div>
                </div>

                <div className=" flex justify-center text-center items-end ">

                    <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">

                        <p className="pt-30 lg:pt-3">
                            In a rapidly evolving global marketplace, maintaining a strong cash flow and securing timely financing can be a significant challenge for publicly traded companies. Traditional funding mechanisms such as convertible debt structures often come with hidden costs and can lead to unpredictable dilution, disrupting your company’s journey towards growth and success.


                        </p>

                    <ApplyNowButton/>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div className="relative container  lg:mt-[100px] mt-[50px] ">
        <div className="relative ">

            <div className="container   flex justify-center lg:my-[100px]">

                <div
                    className="h-[24rem] w-[64rem] bg-[#eff6ff] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                    <div className="flex h-full w-full justify-between ">
                        <div className="h-full w-36 relative  lg:left-[-5%] flex items-start left-[-16%] lg:pt-10 ">
                            <img src="/assets/images/Graphic - Left.png"/>
                        </div>
                        <div className="h-full w-36 relative top-30 left-12 flex items-end  ">
                            <svg width="252" height="252" viewBox="0 0 252 252" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M111.723 14.1421C119.533 6.33165 132.197 6.33165 140.007 14.1421L237.588 111.723C245.398 119.533 245.398 132.197 237.588 140.007L140.007 237.588C132.197 245.398 119.533 245.398 111.723 237.588L14.1421 140.007C6.33162 132.197 6.33162 119.533 14.1421 111.723L111.723 14.1421Z"
                                    fill="white" />
                                <path
                                    d="M177.355 177.095C148.918 205.532 102.812 205.532 74.3748 177.095C45.9375 148.657 45.9373 102.552 74.3748 74.1143C102.812 45.677 148.918 45.677 177.355 74.1143C205.793 102.552 205.792 148.657 177.355 177.095Z"
                                    fill="#C8C2FC" />
                                <path
                                    d="M56.671 106.734C49.694 131.18 55.7385 158.458 74.8564 177.576C103.028 205.748 148.918 205.532 177.355 177.095C205.792 148.657 206.008 102.767 177.837 74.5959L126.347 126.086L56.671 106.734Z"
                                    fill="#6C4FFE" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <div className=" container absolute top-0 left-0 z-10 flex justify-center pt-8">
            <div
                className="h-[20rem] lg:w-[60rem] rounded-xl bg-white flex justify-center items-center md:w-[39rem] w-[18rem] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                <div className="w-[36rem] text-center ">
                    <div className="flex justify-center pb-5 ">
                        <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                                fill="#6C4FFE" />
                        </svg>
                    </div>
                    <p>At <span className="text-primary">Liqueous</span>, we recognize these complexities and have
                        crafted a unique solution - Equity Lines of Credit (ELOC) - designed to equip businesses with the financial agility they need to seize growth opportunities and navigate market dynamics with confidence.</p>
                        <ApplyNowButton/>

                </div>
            </div>
        </div>
    </div>
    <section className="bg-gradient-to-b from-white/[55%] to-transparent pt-14 dark:from-white/5 lg:pt-0">
        <div className="container ">
            <div className="heading text-center">
                <div className="flex justify-center">
                    <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                            fill="#6C4FFE" />
                    </svg>
                </div>

                <h4 className='font-extrabold'>Why Choose Our </h4>



                <h4 className='font-extrabold'>
                    <span className="text-primary"> 
                        Equity Lines</span> of Credit?
                    
                </h4>
                <p>  Our Beneficial Ownership Retention Repurchase Option (BORRO) is a unique </p>
                <p>  liquidity solution designed with the needs of businesses like yours in mind. </p>
              


            </div>
            <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-end justify-center">
                    <div className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>

                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6001 10.024V0C9.14184 0.365557 5.94128 1.99812 3.61515 4.5831C1.28903 7.16807 0.00195313 10.5225 0.00195312 14C0.00195313 17.4775 1.28903 20.8319 3.61515 23.4169C5.94128 26.0019 9.14184 27.6344 12.6001 28V17.976C11.8047 17.6465 11.1193 17.0979 10.6236 16.394C10.1279 15.6901 9.84229 14.8599 9.80006 14C9.84229 13.1401 10.1279 12.3099 10.6236 11.606C11.1193 10.9021 11.8047 10.3535 12.6001 10.024ZM18.0001 12.6H28.0001C27.7313 9.34813 26.3175 6.29709 24.0102 3.98983C21.703 1.68256 18.6519 0.268757 15.4001 0V10.024C16.0099 10.2102 16.5654 10.542 17.0183 10.9908C17.4713 11.4396 17.8083 11.9919 18.0001 12.6ZM15.4001 17.976V28C18.6519 27.7312 21.703 26.3174 24.0102 24.0102C26.3175 21.7029 27.7313 18.6519 28.0001 15.4H18.0001C17.8083 16.0081 17.4713 16.5604 17.0183 17.0092C16.5654 17.458 16.0099 17.7898 15.4001 17.976Z" fill="#5C96FD"/>
                            </svg>

                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black ">
                               Control Over Capital Raising
                            </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            Unlike convertible debt structures that can
                            lead to unpredictable dilution, our ELOCs give you the power to determine how much capital you want to raise, and when. This control can prove invaluable in managing your company’s growth and in maintaining the trust and confidence of your investor base.


                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-start justify-center">
                    <div className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.1002 5.895H20.3002V2.947C20.3045 2.56274 20.2329 2.1814 20.0892 1.82496C19.9456 1.46851 19.7329 1.144 19.4634 0.870087C19.1938 0.596178 18.8728 0.378289 18.5187 0.228962C18.1646 0.0796355 17.7845 0.00182158 17.4002 0L11.6002 0C11.2159 0.00182158 10.8358 0.0796355 10.4817 0.228962C10.1276 0.378289 9.80654 0.596178 9.53699 0.870087C9.26745 1.144 9.05475 1.46851 8.91114 1.82496C8.76752 2.1814 8.69583 2.56274 8.70019 2.947V5.895H2.90019C2.51655 5.8968 2.13708 5.97471 1.78376 6.1242C1.43044 6.2737 1.11029 6.49181 0.841865 6.76591C0.573438 7.04001 0.362066 7.36465 0.219992 7.72102C0.0779175 8.07739 0.00796532 8.45841 0.0141872 8.842L0.000187248 25.053C-0.00416901 25.4373 0.067524 25.8186 0.211139 26.175C0.354754 26.5315 0.567454 26.856 0.836995 27.1299C1.10654 27.4038 1.42759 27.6217 1.78168 27.771C2.13577 27.9204 2.5159 27.9982 2.90019 28H26.1002C26.4845 27.9982 26.8646 27.9204 27.2187 27.771C27.5728 27.6217 27.8938 27.4038 28.1634 27.1299C28.4329 26.856 28.6456 26.5315 28.7892 26.175C28.9329 25.8186 29.0045 25.4373 29.0002 25.053V8.842C29.0045 8.45774 28.9329 8.0764 28.7892 7.71996C28.6456 7.36351 28.4329 7.039 28.1634 6.76509C27.8938 6.49118 27.5728 6.27329 27.2187 6.12396C26.8646 5.97464 26.4845 5.89682 26.1002 5.895ZM17.4002 5.895H11.6002V2.947H17.4002V5.895Z" fill="#5C96FD"/>
                            </svg>
                        <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black"> 
                                Predictable Dilution
                           </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            With our ELOCs, you can accurately
calculate the dilution that your financing will cause. This level of predictability allows you to make strategic decisions and maintain your company’s financial health in the long run.

                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-end justify-center">
                    <div className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                            </svg>
                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                           
                               Compliance with
                                Registration Statements
                           
                        </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            Our ELOCs require an S1 registration
                            statement, ensuring full compliance with regulatory requirements.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-start justify-center">
                    <div className="lg:h-5/6 lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                            </svg>
                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                           
                               Interim Bridge Terms
                            
                        </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            While the registration statement is in
                            process, we offer bridge terms that provide you with the necessary funds and protect you from being forced into a toxic funding situation.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- <div className="relative container   mt-[50px] "> -->
        <!-- <div className="relative ">

            <div className="container   flex justify-center lg:my-[100px]">

                <div
                    className="lg:h-[15rem] h-[26rem]  w-[64rem] bg-[#eff6ff] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                    <div className="flex h-full w-full justify-between ">

                    </div>

                </div>
            </div>
        </div> --> */}



        <div className=" container flex justify-center mt-[50px] ">
            <div
                className="lg:h-[13rem] h-[25rem] lg:w-full  rounded-xl bg-white flex justify-center items-center border-[26px] border-[#eff6ff] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                <div className="w-11/12  ">

                    
                        <div className="flex items-center justify-center px-6 text-center ">
                           <p>Our <span className="text-secondary">ELOCs</span>  are specifically tailored to cater to a diverse range of enterprises, from microcap to mid-
                            market. They are an ideal solution for accessing growth capital and fostering aftermarket presence and investor engagement. Experience the advantages of our tailored financing solutions and unlock your company’s full potential with a partner committed to your success.</p>
                        </div>
                </div>
            </div>
        </div>
    {/* <!-- </div> --> */}
    {/* <!-- <div className="relative container  lg:mt-[100px] mt-[50px] "> -->
        <!-- <div className="relative ">

            <div className="container   flex justify-center lg:my-[100px]">

                <div
                    className="lg:h-[18rem] h-[31rem] w-[64rem] bg-[#eff6ff] rounded-xl flex justify-center items-center dark:border-2 dark:border-gray dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none  ">
                    <div className="flex h-full w-full justify-between ">

                    </div>

                </div>
            </div>
        </div> --> */}



        <div className=" container flex justify-center lg:mt-[100px] mt-[50px]  ">
            <div
                className="lg:h-[16rem] h-[30rem] w-full rounded-xl bg-white flex justify-center items-center border-[26px] border-[#eff6ff]  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                <div className="w-11/12  ">

                    <div className="lg:flex justify-between ">
                        <div className="flex items-center justify-center text-center lg:text-start ">
                            <div className="flex-1 w-[19rem] ">
                                <h2 className="text-2xl font-extrabold text-black dark:text-white"> At Liqueous, we believe in
                                   
                                  
                                </h2>
                                <h2 className="text-2xl font-extrabold text-black dark:text-white">  the power of bespoke 
                                    solutions. 
                                       
                                </h2>
                            </div>
                        </div>
                        <div className=" flex-1  flex justify-center   ">
                            <img src="/assets/images/Bars.svg"/>
                        </div>
                        <div className="flex-1 lg:w-[22rem] ">
                            <p>Our Equity Lines of Credit are carefully
                                crafted to align with your business’s unique needs and strategic goals, offering you a financial tool that not only meets your current requirements but also empowers your future growth.</p>
                        </div>
                    </div>



                </div>
            </div>
        {/* <!-- </div> --> */}
    </div>
    <section className="bg-white/50 dark:bg-black lg:px-14 px-0 ">
        <div className="container mt-[50px]">
            <div className="heading text-center">
                <div className="flex justify-center">
                    <img src="/assets/images/Star.svg"/>
                </div>
                <h4 className='font-extrabold'>Discover the Liqueous <span className="text-primary">Advantage </span></h4>
            </div>


            <div className="grid items-center gap-2 md:grid-cols-3 lg:grid-cols-2 xl:items-start">
                <div className="lg:order-2 order:1 md:col-span-2 lg:col-auto">
                    <div className="text-center font-semibold md:text-left lg:text-left lg:p-10 ">



                        <p className="lg:pt-16 lg:px-0 px-4">
                            The world of finance is complex, but navigating it doesn’t have to be. With our Equity Lines of Credit, you can secure the capital you need, maintain control over your company’s financial future, and create a growth trajectory that aligns with your vision.</p>


                        {/* <!-- <a href="" className="btn mt-10 capitalize text-white">Contact Us</a> --> */}
                        <ApplyNowButton/>
                    </div>
                </div>
                <div className="lg:order-1 mx-auto  order:2 md:mx-0 ">
                    <div className=" flex justify-center lg:w-5/6  ">
                        <img src="/assets/images/e-left.svg"/>
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



        <div className=" container  flex justify-center lg:mt-[100px] my-[50px] ">
            <div
                className="lg:h-[13rem] h-[22rem] w-full rounded-xl bg-white flex justify-center items-center  border-[26px] border-[#eff6ff]  dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                <div className="w-11/12  ">
                   
                 
                    <div className="lg:flex justify-between ">
                        <div className="flex items-center justify-center ">
                            <div className="flex-auto w-65 text-center lg:text-start ">
                                <h2 className="text-2xl font-extrabold text-black dark:text-white">  Embrace the  
                                    <span className="text-secondary text-2xl"> future</span> of financing.
                                </h2>
                                <h2 className="text-2xl font-extrabold text-black dark:text-white">    Discover the   <span
                                        className="text-primary">Liqueous </span>advantage today..

                                </h2>
                            </div>
                        </div>
                        <div className="flex-auto w-35 flex lg:justify-end justify-center  ">
                            <img src="/assets/images/b-Graphics.svg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- </div> -->     */}
</div>

    </div>
  )
}

export default equityLines
