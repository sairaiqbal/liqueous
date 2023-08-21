import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">

        <div className="relative ">
            <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon"
                className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
            <img src="/assets/images/banner-rightIcon.png" alt="banner-rightIcon"
                className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]" />
            <div className="container  lg:p-14 p-4  pb-0">
    
                <div className="heading text-center mb-0">
                    <h4 className="">Our Blogs
                    </h4>
                    <p>The Future of Work: Adapting to Changing Dynamics and Trends.</p>
    
                </div>
                <div className="flex justify-center my-8">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.318 10.364L24.938 6.8L28.5 5.182L24.938 3.563L23.318 0L21.7 3.563L18.136 5.182L21.7 6.8L23.318 10.364ZM13.602 11.012L10.364 3.886L7.125 11.011L0 14.25L7.125 17.489L10.364 24.614L13.6 17.489L20.725 14.25L13.602 11.012ZM23.318 18.137L21.7 21.7L18.138 23.319L21.7 24.938L23.318 28.5L24.937 24.938L28.5 23.318L24.938 21.7L23.318 18.137Z" fill="#5C96FD"/>
                        </svg>
                    </div>
                
                <div className="heading mb-0 flex justify-center text-center">
                   
                    <h2 className="text-2xl font-extrabold text-black dark:text-white">Unlock The Latest 
                        <span className="text-primary"> Trends / News </span>
                    </h2>
                </div>
          
    
                <div className=" flex justify-center text-center items-end ">
    
                    <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">
    
                        <p className="pt-30 lg:pt-4">
    
                            "Welcome to our stock loan website, where we empower investors to maximize their investments and
                            access capital through our comprehensive range of stock loan solutions. With enhanced liquidity
                            and strategic opportunities, our platform offers financial flexibility while retaining ownership
                            of your valuable securities. Our dedicated team provides personalized solutions, guiding you
                            through the process of unlocking the untapped value within your portfolio. Join us on this
                            empowering journey of stock loans."
    
                        </p>
    
                       
                    </div>
                </div>
            </div>
    
        </div>
   

        <section className=" py-14 dark:bg-none md:py-[100px]">
            <div className="container">
                
                <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* data-aos="fade-up" data-aos-duration="1000" */}
                    <div data-aos="fade-up" data-aos-duration="1000" >
                        <div
                            className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                            <Link href="/blogs/5-Reasons-why-stock-loans-are-a-smart-choice" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <img src="/assets/images/blog-1.png" alt="blog-1"
                                className="h-52 w-full rounded-t-3xl object-cover" />
                            <div className="p-5 text-sm font-bold">
                                <h6 className="font-extrabold text-secondary dark:text-secondary">MARCH 29, 2023</h6>
                                <h5
                                    className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                    5 Reasons Why Stock Loans are a Smart Choice
                                </h5>
                                <p className="line-clamp-4">
                                    This blog highlights the benefits of stock loans over other traditional loan options. It
                                    could discuss how stock
                                    loans provide investors with the opportunity to access capital without having...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                            <Link href="/blogs/How-to-Use-Stock-Loans-to-Build-Your-Investment-Portfolio" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <img src="/assets/images/blog-2.png" alt="blog-2"
                                className="h-52 w-full rounded-t-3xl object-cover" />
                            <div className="p-5 text-sm font-bold">
                                <h6 className="font-extrabold text-secondary dark:text-secondary">MARCH 3, 2023</h6>
                                <h5
                                    className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                    Read More
                                    Maximizing Your Returns: How to Use Stock Loans to Build Your Investment Portfolio
                                </h5>
                                <p className="line-clamp-4">
                                    This blog focuses on how investors can leverage stock loans to expand their investment
                                    portfolios and increase their returns.
                                    It discusses how stock loans can be used to purchase...
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div
                            className="relative rounded-3xl border border-transparent bg-white transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-gray-dark">
                            <Link href="/blog/What-is-a-Stock-Loan" className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <img src="/assets/images/blog-3.png" alt="blog-3"
                                className="h-52 w-full rounded-t-3xl object-cover" />
                            <div className="p-5 text-sm font-bold">
                                <h6 className="font-extrabold text-secondary dark:text-secondary">FEBRUARY 14, 2023</h6>
                                <h5
                                    className="my-[10px] block text-lg font-extrabold leading-[23px] text-black line-clamp-2 dark:text-white">
                                    What is a Stock Loan?
                                </h5>
                                <p className="line-clamp-4">
                                    In the world of finance, there are a multitude of different instruments that can be used
                                    to invest and trade in the stock market. One of these instruments is...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
   
    
  );
}

export default Blog;