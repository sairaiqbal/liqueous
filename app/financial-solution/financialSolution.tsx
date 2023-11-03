"use client";
import React, { useEffect } from "react";
import Aos from "aos";

const FinancialSolution = () => {
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
            className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
            style={{ boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)" }}
          >
            <svg
              width="31"
              height="29"
              viewBox="0 0 31 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.375 24.5H0V28.5H19.375V24.5ZM31 8.5H0V12.5H31V8.5ZM0 20.5H31V16.5H0V20.5ZM0 0.5V4.5H31V0.5H0Z"
                fill="#5C96FD"
              />
            </svg>

            <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black ">
              Venture Debt
            </div>

            <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
              We provide access to venture debt solutions that offer a lower
              cost and less dilutive alternative to equity financing for
              growth-oriented companies. Our venture debt solutions are designed
              to support your strategic growth initiatives, from expansion plans
              to mergers and acquisitions.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex lg:justify-start justify-center"
        >
          <div
            className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
            style={{ boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)" }}
          >
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29 15C29 12.1322 28.1496 9.32875 26.5563 6.94424C24.963 4.55973 22.6984 2.70122 20.0489 1.60375C17.3994 0.506283 14.4839 0.219134 11.6712 0.77862C8.85847 1.33811 6.27482 2.7191 4.24696 4.74696C2.2191 6.77482 0.838106 9.35847 0.27862 12.1712C-0.280866 14.9839 0.00628257 17.8994 1.10375 20.5489C2.20122 23.1984 4.05973 25.463 6.44424 27.0563C8.82875 28.6496 11.6322 29.5 14.5 29.5C18.3452 29.4987 22.0326 27.9706 24.7516 25.2516C27.4706 22.5326 28.9987 18.8452 29 15ZM18.85 7.02501L23.925 12.1L18.85 17.175V13.55H13.05V10.65H18.85V7.02501ZM10.15 22.975L5.07501 17.9L10.15 12.825V16.45H15.95V19.35H10.15V22.975Z"
                fill="#5C96FD"
              />
            </svg>

            <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
              Bridge Transactions
            </div>

            <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
              Liqueous offers bridge transactions designed to provide interim
              financing leading to a senior stock exchange listing. Our bridge
              transactions help businesses bridge the gap between their current
              financial situation and their future capital needs.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex lg:justify-end justify-center"
        >
          <div
            className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
            style={{ boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)" }}
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0.5C11.2311 0.5 8.52431 1.32109 6.22202 2.85943C3.91973 4.39777 2.12532 6.58427 1.06569 9.14243C0.00606608 11.7006 -0.271181 14.5155 0.269012 17.2313C0.809205 19.947 2.14258 22.4416 4.10051 24.3995C6.05845 26.3574 8.55301 27.6908 11.2687 28.231C13.9845 28.7712 16.7994 28.4939 19.3576 27.4343C21.9157 26.3747 24.1022 24.5803 25.6406 22.278C27.1789 19.9757 28 17.2689 28 14.5C27.9987 10.7874 26.5233 7.22719 23.898 4.60197C21.2728 1.97675 17.7126 0.501325 14 0.5ZM11.2 21.5L4.20001 14.5L6.17401 12.526L11.2 17.538L21.826 6.912L23.8 8.9L11.2 21.5Z"
                fill="#5C96FD"
              />
            </svg>
            <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
              Toxic Debt Refinancing
            </div>

            <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
              Our team has extensive experience in helping businesses refinance
              toxic debt, transforming it into a more manageable and sustainable
              financial arrangement. Our solutions are designed to reduce your
              financial stress and provide you with the breathing room you need
              to focus on your core operations.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex lg:justify-start justify-center"
        >
          <div
            className="h-full lg:w-3/4 w-full overflow-hidden group rounded-3xl border-2 border-white bg-white p-6 lg:mt-10 transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.04] dark:to-transparent dark:!shadow-none dark:hover:bg-secondary"
            style={{ boxShadow: "-20px 30px 70px rgba(219, 222, 225, 0.4)" }}
          >
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 28.5H17.5V0.5H10.5V28.5ZM0 28.5H7V14.5H0V28.5ZM21 9.25V28.5H28V9.25H21Z"
                fill="#5C96FD"
              />
            </svg>
            <div className="mt-8 inline-block text-[22px] font-extrabold text-black dark:text-white dark:group-hover:text-black">
              Equity Investments
            </div>

            <p className="mb-10 text-lg font-semibold transition dark:group-hover:text-black">
              As part of our commitment to support your growth journey, we offer
              equity investment solutions that provide your business with the
              capital it needs to innovate, expand, and thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSolution;
