
import React from 'react'
import ApplyNowButton from '../components/ApplyNowButton';
import FinancialSolution from './financialSolution';
const  Page= () => {
 
  return (
    <div>
      <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
    <div className="overflow-hidden  sm:-mx-[250px]  lg:-mx-[150px] ">
        <div className="relative bg-gradient-to-r to-transparent">
            <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon"
               className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
            <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon"
               className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
            <div className="container  lg:p-14 p-4">

                <div className="relative">
                    <div className="absolute top-60 left-10">
                      <img src="/assets/images/p-top.svg"/>
                    </div>
                    <div className="heading text-center mb-0">
                      <h4 className='font-extrabold'>Comprehensive Financial</h4>
                      <h4 className='font-extrabold'>Solutions by Liqueous</h4>
                      <p>Unlock Your Business’s True Potential with</p>
                      <p>Our Tailored Financial Solutions</p>
                    </div>
                    <div>
                      <img src="/assets/images/p-under.svg" className="w-full h-full"/>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="grid items-center lg:gap-14 md:grid-cols-2 lg:grid-cols-2 xl:items-start  ">
                        <div className="lg:order-2 order:1  lg:col-auto flex justify-center ">
                            <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                                    <div className=" rounded-xl p-5">
                                        <p className="mb-3 font-normal text-gray dark:text-gray-400">From venture debt and equity investments to toxic debt refinancing and bridge transactions leading to a senior stock exchange listing, our seasoned team is here to support your growth ambitions and optimize your capital structure.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="lg:order-1 mx-auto  order:2 md:mx-0 flex justify-center text-center lg:text-start  ">
                                <div className=" rounded-xl p-5 ">
                                    <p className="mb-3 font-normal text-gray dark:text-gray-400">
                                        Navigating the financial landscape can be complex, especially when it involves strategic growth decisions for your business. At Liqueous, we are committed to providing you with a comprehensive range of financial solutions, each expertly tailored to cater to your unique needs.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="bg-gradient-to-b from-white/[55%] to-transparent py-14 dark:from-white/5 lg:pt-[100px]">
        <div className="container ">
            <div className="heading text-center">
                <div className="flex justify-center">
                    <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                            fill="#6C4FFE" />
                    </svg>
                </div>

                <h4 className='font-extrabold'>Our Suite of
                    <span className="text-primary"> Financial </span>
                </h4>

                <h4 className='font-extrabold'> Solutions Includes:</h4>



            </div>
            {/* <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-end justify-center">
                    <div className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>

                        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 24.5H0V28.5H19.375V24.5ZM31 8.5H0V12.5H31V8.5ZM0 20.5H31V16.5H0V20.5ZM0 0.5V4.5H31V0.5H0Z" fill="#5C96FD"/>
                            </svg>

                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black "> 
                               Venture
                                Debt
                            </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            We provide access to venture debt solutions that offer a lower cost and less dilutive
                            alternative to equity financing for growth-oriented companies. Our venture debt solutions
                            are designed to support your strategic growth initiatives, from expansion plans to mergers
                            and acquisitions.



                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-start justify-center">
                    <div className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 15C29 12.1322 28.1496 9.32875 26.5563 6.94424C24.963 4.55973 22.6984 2.70122 20.0489 1.60375C17.3994 0.506283 14.4839 0.219134 11.6712 0.77862C8.85847 1.33811 6.27482 2.7191 4.24696 4.74696C2.2191 6.77482 0.838106 9.35847 0.27862 12.1712C-0.280866 14.9839 0.00628257 17.8994 1.10375 20.5489C2.20122 23.1984 4.05973 25.463 6.44424 27.0563C8.82875 28.6496 11.6322 29.5 14.5 29.5C18.3452 29.4987 22.0326 27.9706 24.7516 25.2516C27.4706 22.5326 28.9987 18.8452 29 15ZM18.85 7.02501L23.925 12.1L18.85 17.175V13.55H13.05V10.65H18.85V7.02501ZM10.15 22.975L5.07501 17.9L10.15 12.825V16.45H15.95V19.35H10.15V22.975Z" fill="#5C96FD"/>
                            </svg>
                            
                        <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                                Bridge
                                Transactions
                           </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            Liqueous offers bridge transactions designed to provide interim financing leading to a
                            senior stock exchange listing. Our bridge transactions help businesses bridge the gap
                            between their current financial situation and their future capital needs.

                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-end justify-center">
                    <div className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 0.5C11.2311 0.5 8.52431 1.32109 6.22202 2.85943C3.91973 4.39777 2.12532 6.58427 1.06569 9.14243C0.00606608 11.7006 -0.271181 14.5155 0.269012 17.2313C0.809205 19.947 2.14258 22.4416 4.10051 24.3995C6.05845 26.3574 8.55301 27.6908 11.2687 28.231C13.9845 28.7712 16.7994 28.4939 19.3576 27.4343C21.9157 26.3747 24.1022 24.5803 25.6406 22.278C27.1789 19.9757 28 17.2689 28 14.5C27.9987 10.7874 26.5233 7.22719 23.898 4.60197C21.2728 1.97675 17.7126 0.501325 14 0.5ZM11.2 21.5L4.20001 14.5L6.17401 12.526L11.2 17.538L21.826 6.912L23.8 8.9L11.2 21.5Z" fill="#5C96FD"/>
                            </svg>
                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                           
                               Toxic
                                Debt Refinancing
                          
                        </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            Our team has extensive experience in helping businesses refinance toxic debt, transforming
                            it into a more manageable and sustainable financial arrangement. Our solutions are designed
                            to reduce your financial stress and provide you with the breathing room you need to focus on
                            your core operations.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="flex lg:justify-start justify-center">
                    <div className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
                        style={{boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)"}}>
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 28.5H17.5V0.5H10.5V28.5ZM0 28.5H7V14.5H0V28.5ZM21 9.25V28.5H28V9.25H21Z" fill="#5C96FD"/>
                            </svg>
                        <div  className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
                           
                               Equity
                                Investments
                            
                        </div>

                        <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
                            As part of our commitment to support your growth journey, we offer equity investment
                            solutions that provide your business with the capital it needs to innovate, expand, and
                            thrive.

                        </p>
                    </div>
                </div>
            </div> */}
            <FinancialSolution/>
        </div>
    </section>
    <section>
        <div className="container lg:mt-[100px]">
            <div className="heading text-center">
                <div className="flex justify-center">
                    <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                            fill="#6C4FFE" />
                    </svg>
                </div>

                <h4 className='font-extrabold'>Why Choose <span className="text-primary">Liqueous </span> </h4>
                <h4 className='font-extrabold'> Comprehensive Financial Solutions?</h4>

                <p>Partnering with Liqueous means benefiting from our:</p>

            </div>
            <div className="flex justify-center">
                <div className="grid items-center gap-4 md:grid-cols-2 lg:grid-cols-2 xl:items-start  lg:w-3/4 w-full">
                    <div className="lg:order-2 order:1  lg:col-auto flex justify-center ">
                        <div className="text-center font-semibold md:text-left lg:text-left  ">
                            {/* <!-- <div
                               className=" flex justify-center items-center  lg:w-[24rem] lg:h-[19rem] w-[18rem] h-[23rem]  bg-[#f3f3fe]  rounded-xl "> --> */}
                                <div className="w-full  lg:h-[19rem] h-[19rem] bg-white rounded-xl p-5 border-[26px] border-[#f3f3fe]">
                                    <div className="flex justify-center lg:block">
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                                            </svg>
                                </div>
                                   
                                        <h5
                                           className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                                            Tailored Solutions</h5>
                                   
                                    <p className="mb-3 font-normal text-gray dark:text-gray-400"> We understand that every
                                        business is unique, which is why we tailor our financial solutions to meet your
                                        specific needs and circumstances.</p>
                                </div>
                            {/* <!-- </div> --> */}
                        </div>
                    </div>
                    <div className="lg:order-1 mx-auto  order:2 md:mx-0 flex justify-center  ">
                        {/* <!-- <div className=" flex justify-center items-center  lg:w-[24rem] lg:h-[19rem] w-[18rem] h-[23rem]  bg-[#f3f3fe] rounded-xl  "> --> */}
                            <div className="text-center font-semibold md:text-left lg:text-left  ">
                            <div className="w-full  lg:h-[19rem] h-[19rem] bg-white rounded-xl p-5  border-[26px] border-[#f3f3fe] ">
                                <div className="flex justify-center lg:block">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                                        </svg>
                                </div>
                               
                                    <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                                        Expertise</h5>
                               
                                <p className="mb-3 font-normal text-gray dark:text-gray-400">
                                    Our seasoned team brings a wealth of experience and knowledge to the table, ensuring
                                    that you receive expert advice and support at every turn.</p>
                            </div>
                            </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
            </div>
           



                <div className=" container px-[0.5px]  flex justify-center lg:my-[100px] mt-[50px]">
                    <div
                       className="lg:h-[18rem] h-[35rem] w-full rounded-xl bg-white flex justify-center items-center border-[26px] border-[#eff6ff] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none   ">

                        <div className="w-11/12   ">

                            <div className="lg:flex  ">
                                <div className="flex items-center justify-center lg:w-1/2 ">
                                    <div>
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                                            </svg>
                                       
                                            <h5
                                               className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                                                Commitment to Your Success</h5>
                                    
                                        <p className="mb-3 font-normal text-gray dark:text-gray-400">
                                            Your success is our success. We are committed to supporting your growth
                                            ambitions and helping you unlock your business’s true potential.</p>
                                    </div>
                                </div>
                                <div className=" lg:w-1/2 flex justify-center ">
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
            {/* <!-- </div> --> */}
        </div>
    </section>
    <section className="lg:mb-[100px] mb-[50px]">
        <div className="container mt-[100px]">
            <div className="heading text-center">
                <div className="flex justify-center">
                   <img src="/assets/images/Star.svg"/>
                </div>

                <h4 className='font-extrabold'>Experience the <span className="text-primary">Liqueous </span> Difference</h4>
            </div>
        </div>
        <div className="  flex justify-center">
            <div className="grid items-center gap-14 md:grid-cols-1 lg:grid-cols-2 xl:items-start ">
                <div className="order-2   lg:col-auto flex justify-center lg:mt-48 ">
                    <div className="text-center font-semibold ltr:md:text-left rtl:md:text-right  ">
                        <div className=" flex justify-center items-center    lg:w-[31rem] md:w-[35.5rem] w-[21.5rem] h-[28rem] bg-[#f3f3fe] rounded-xl " >
                            <div className="lg:w-[28rem] md:w-[32rem] w-[18.5rem] h-[25rem]  bg-white rounded-xl lg:p-12 lg:pt-12 md:pt-8 pt-4 text-center lg:leading-6 md:leading-10">
                                <div className="flex justify-center">
                                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8825 0.500016C12.1174 0.502784 9.41525 1.32622 7.11754 2.86624C4.81983 4.40627 3.02973 6.59373 1.9735 9.15214C0.917279 11.7106 0.642357 14.525 1.18349 17.2399C1.72461 19.9547 3.0575 22.4479 5.01366 24.4044C6.96983 26.361 9.46145 27.693 12.1736 28.232C14.8857 28.7711 17.6966 28.493 20.2509 27.433C22.8052 26.3729 24.9883 24.5785 26.5241 22.2765C28.06 19.9746 28.8798 17.2684 28.8798 14.5C28.8807 12.6601 28.5192 10.838 27.8159 9.13812C27.1126 7.43823 26.0814 5.8939 24.7813 4.59351C23.4811 3.29312 21.9376 2.26222 20.239 1.5598C18.5405 0.857388 16.7202 0.497254 14.8825 0.500016ZM20.8114 22.9L14.8964 19.33L8.98149 22.9L10.5476 16.166L5.33183 11.644L12.2116 11.056L14.8964 4.70002L17.5812 11.042L24.4611 11.63L19.2453 16.152L20.8114 22.9Z" fill="#5C96FD"/>
                                        </svg>
                                </div>

                                <p className="mb-3 font-normal text-gray dark:text-gray-400"> Discover the unparalleled
                                    value of partnering with Liqueous and navigate the complexities of the financial
                                    landscape with confidence. With our comprehensive financial solutions, you can
                                    unlock your business’s true potential and set a course for sustainable growth. </p>
                            
                                    <h5 className="my-3 text-2xl font-semibold tracking-tight text-black dark:text-white">
                                        Experience the Liqueous
                                        difference today.</h5>
                              
                                        <ApplyNowButton/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 mx-auto   md:mx-0 flex justify-center  ">
                    <div className=" flex justify-center items-center  lg:w-[31rem] md:w-[41.5rem] w-[21.5rem]    ">
                       <img src="/assets/images/f-left.svg"/>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </div>
    </div>
  )
}

export default Page
export function generateMetadata() {
    return {
      title: "Financial Solutions | Liqueous",
      description: "Financial Solutions Page",
    };
  }
