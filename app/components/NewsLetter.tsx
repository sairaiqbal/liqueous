"use client";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import createSubscription from "@/app/Utils/createSubscription";


const NewsLetter = () => {
    const { handleSubmit, register , reset } =
    useForm();
    const [ responseText , setResponseText] = useState("");

    const onSubmit = async (data: any) => {
      const response = await createSubscription(data);
      if (response) {
        setResponseText("Thank you for subscribing our newsletter!");
      } else {
        setResponseText("unkown error");
      }
  
      reset();
      console.log(" news letter response : ",response);
    }
  return (
    <div>
      <form 
            onSubmit={handleSubmit(onSubmit)}
            >
              <div className="relative pt-6">
                <input
                {...register ( 'email')}
                  type="email"
                  id="default-search"
                  className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg rounded-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_b_884_375)">
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z"
                        fill="#5C96FD"
                      />
                    </g>
                    <g filter="url(#filter1_b_884_375)">
                      <path
                        d="M19.504 11.8217L22.7348 15.3217C23.0884 15.7047 23.0884 16.2952 22.7348 16.6782L19.504 20.1783C19.1294 20.5841 18.4968 20.6094 18.091 20.2348C17.6851 19.8602 17.6598 19.2276 18.0344 18.8217L19.716 17L10 17C9.44771 17 9 16.5523 9 16C9 15.4477 9.44771 15 10 15L19.716 15L18.0344 13.1783C17.6598 12.7725 17.6851 12.1398 18.0909 11.7652C18.4968 11.3906 19.1294 11.4159 19.504 11.8217Z"
                        fill="#FCFCFD"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_884_375"
                        x="-10"
                        y="-10"
                        width="52"
                        height="52"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_884_375"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_884_375"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_884_375"
                        x="-1"
                        y="1.5"
                        width="34"
                        height="29"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="5"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_884_375"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_884_375"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="relative mt-10 mb-10 text-center text-sm text-[green] ltr:lg:text-right rtl:lg:text-left">
            {responseText}
          </div>
            </form>
    </div>
  )
}

export default NewsLetter
