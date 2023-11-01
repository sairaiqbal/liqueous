"use client";
import generate_term_sheet from '@/app/Utils/generate_term_sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react'

const Congratulations = () => {
    const [loadingSheet, setLoadingSheet] = useState(false);
    const fadeDiv = useRef<HTMLDivElement | null>(null);
    const [response, setResponse] = useState({ id: "", plans: [] ,user_exists: ""});
    const [id, setId] = useState("");
    const pathname = usePathname();
    const pathnameParts = pathname.split("/");
    const downloadTermSheet = async () => {
        console.log("download")
        setLoadingSheet(true);
        if (fadeDiv.current) {
          fadeDiv.current.style.opacity = "0.3";
        }
        try {
          const pdfRes = await generate_term_sheet(pathnameParts[4], pathnameParts[3]);
           console.log("final response: ", pdfRes);
    
          const url = pdfRes.pdf_file_url;
          window.open(url, "_blank");
          setLoadingSheet(false);
          if (fadeDiv.current) {
            fadeDiv.current.style.opacity = "";
          }
        } catch (error) {
          // Handle error here
          console.error("Error:", error);
          setLoadingSheet(false);
          if (fadeDiv.current) {
            fadeDiv.current.style.opacity = "";
          }
        }
      };
  return (
    <>
    <div className=" ">
        <div className="flex min-h-[150px] items-center justify-center">
            <div className="p-12 text-center font-semibold">
                <h4 className="my-5 text-xl font-semibold text-primary sm:text-5xl">Congratulations</h4>
                <p className="text-base">Welcome to Your Financial Journey!</p>
                <p>
                    We're excited to have you on board. Your financing application has been successfully processed, and we're here to help you every step of the way.
                </p>
            </div>
        </div>
    </div>
    <section>
        <div 
            className="grid lg:grid-cols-3 grid-cols-1 gap-12 px-8 min-h-[400px]">
            <div 
                className="min-h-full p-6 bg-white border border-white cursor-pointer flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                <div 
                onClick={downloadTermSheet}
                style={{ pointerEvents: loadingSheet ? "none" : "auto" }}
                ref={fadeDiv} className="relative z-0 " >
                    <div className="flex justify-center ">
                        <svg width="133" height="133" viewBox="0 0 133 133" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M82.4286 0H0.40625V133H104.593V22.1639L82.4286 0Z"
                                fill="#E8E8E8" />
                            <path
                                d="M86.8994 65.7721C85.3013 62.9238 79.7793 62.0289 77.246 61.6262C75.2492 61.3086 73.2106 61.2139 71.191 61.2156C69.6052 61.2051 68.0427 61.2832 66.5003 61.3709C65.9318 61.4091 65.369 61.4582 64.8066 61.5069C64.2302 60.9103 63.6731 60.294 63.1339 59.6636C59.7035 55.6028 56.9337 50.9976 54.6768 46.2122C55.276 43.8999 55.7555 41.4868 56.045 38.9807C56.5736 34.4066 56.7552 29.1939 55.0413 24.8331C54.4495 23.328 52.8716 21.4957 51.0511 22.4081C48.9582 23.4574 48.3696 26.4303 48.1989 28.5377C48.0616 30.241 48.1577 31.9488 48.4437 33.6236C48.735 35.3099 49.2039 36.911 49.7145 38.51C50.1909 39.976 50.716 41.4307 51.2885 42.8717C50.9253 44.0061 50.5397 45.1208 50.1348 46.2069C49.1907 48.6823 48.17 51.0341 47.1882 53.2963C46.6706 54.418 46.1639 55.516 45.6682 56.5894C44.0995 60.0352 42.3966 63.4178 40.4853 66.6876C36.0271 68.2603 32.0264 70.0834 28.7039 72.2259C26.9216 73.3774 25.3472 74.628 24.036 75.9997C22.7981 77.2947 21.54 78.9753 21.4298 80.8357C21.368 81.8858 21.7839 82.9049 22.6441 83.5278C23.8272 84.4117 25.395 84.3529 26.7676 84.0652C31.264 83.122 34.7168 79.2569 37.6572 75.9993C39.6825 73.7555 41.9878 70.9063 44.3991 67.4606C44.4044 67.4527 44.4097 67.4448 44.4154 67.4369C48.5512 66.1546 53.0524 65.072 57.8295 64.2762C60.0119 63.9143 62.2522 63.6182 64.5372 63.4103C66.1441 64.9154 67.8804 66.2858 69.7745 67.4303C71.2498 68.3379 72.8189 69.1043 74.4613 69.6758C76.1221 70.2185 77.793 70.6615 79.5183 70.9419C80.3895 71.0664 81.2805 71.123 82.1907 71.0888C84.2222 71.012 87.138 70.233 87.3293 67.7681C87.3881 67.0136 87.2253 66.352 86.8994 65.7721ZM38.2643 70.2948C37.3128 71.7688 36.3951 73.0944 35.5305 74.2608C33.413 77.142 30.9946 80.5641 27.4932 81.8437C26.8281 82.0868 25.9525 82.3377 25.0296 82.2833C24.2075 82.235 23.3968 81.8722 23.4341 80.9387C23.4526 80.4501 23.6916 79.8267 24.0584 79.2143C24.4598 78.5427 24.9568 77.9268 25.495 77.3605C26.6483 76.1489 28.1064 74.9746 29.7839 73.8871C32.3567 72.218 35.4283 70.7155 38.8521 69.3749C38.6552 69.6864 38.4586 69.9961 38.2643 70.2948ZM50.2058 33.3323C49.9417 31.7908 49.9018 30.2279 50.0641 28.725C50.1449 27.9735 50.2979 27.2401 50.5195 26.5527C50.7072 25.9692 51.1126 24.5453 51.7592 24.3624C52.8251 24.0606 53.1528 26.3491 53.2735 26.9966C53.9604 30.6797 53.3551 34.7756 52.5308 38.3885C52.3996 38.9631 52.2535 39.5286 52.104 40.0918C51.8487 39.3895 51.6052 38.685 51.381 37.977C50.8985 36.4307 50.4572 34.8664 50.2058 33.3323ZM57.5242 62.4075C53.5191 63.0567 49.7093 63.9073 46.1279 64.9114C46.5592 64.7908 48.5297 61.0564 48.9692 60.2813C51.0402 56.6337 52.7343 52.8054 53.9516 48.7894C56.1011 53.0405 58.7099 57.1075 61.9149 60.7274C62.2101 61.056 62.5101 61.3806 62.8154 61.7012C61.0195 61.8947 59.2521 62.1303 57.5242 62.4075ZM84.6095 67.5373C84.463 68.3291 82.7719 68.7818 81.9828 68.9064C79.6508 69.2732 77.1837 68.9797 74.9517 68.23C73.4203 67.7159 71.9433 67.0157 70.54 66.1735C69.145 65.3308 67.84 64.3394 66.62 63.2462C68.1243 63.1559 69.6469 63.0966 71.177 63.1256C72.7071 63.141 74.249 63.2182 75.7721 63.4169C78.6283 63.7354 81.8288 64.7158 84.077 66.5692C84.5196 66.9346 84.6609 67.2575 84.6095 67.5373Z"
                                fill="#5C96FD" />
                            <path d="M85.8586 11.0822H0.40625V0H82.4286L85.8586 11.0822Z"
                                fill="#5C96FD" />
                            <path
                                d="M41.6413 105.787C41.6413 108.139 40.9482 109.955 39.5611 111.236C38.174 112.517 36.2044 113.157 33.6513 113.157H32.0532V120.14H26.3672V99.0928H33.6518C36.3101 99.0928 38.3065 99.6736 39.6405 100.835C40.9745 101.996 41.6413 103.647 41.6413 105.787ZM32.0537 108.522H33.0903C33.9444 108.522 34.6234 108.283 35.1275 107.802C35.6315 107.322 35.8833 106.66 35.8833 105.815C35.8833 104.395 35.0963 103.685 33.5224 103.685H32.0537V108.522Z"
                                fill="#A4A9AD" />
                            <path
                                d="M62.8619 109.17C62.8619 112.682 61.8946 115.389 59.9609 117.289C58.0273 119.19 55.3084 120.14 51.8056 120.14H44.9961V99.0928H52.2807C55.6589 99.0928 58.2668 99.9565 60.1048 101.684C61.9424 103.411 62.8619 105.907 62.8619 109.17ZM56.9595 109.372C56.9595 107.442 56.5779 106.013 55.8151 105.082C55.0522 104.151 53.8932 103.685 52.3381 103.685H50.683V115.475H51.9499C53.6778 115.475 54.9443 114.974 55.7506 113.971C56.5564 112.968 56.9595 111.435 56.9595 109.372Z"
                                fill="#A4A9AD" />
                            <path
                                d="M72.2329 120.14H66.6328V99.0928H79.0713V103.656H72.2329V107.673H78.5384V112.236H72.2329V120.14Z"
                                fill="#A4A9AD" />
                            <path d="M82.4277 22.1639H104.592L82.4277 0V22.1639Z" fill="#D1D3D3" />
                        </svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-black text-lg font-bold hover:text-primary text-center">Download Term Sheet </p>
                        <p className="p-4 text-center">
                            Gain a deeper understanding of your financial agreement by downloading your personalized Term Sheet. It's your roadmap to success.
                        </p>
                    </div>
                </div>
                <div className="absolute z-10">
                {loadingSheet && (
                <svg aria-hidden="true" role="status"
                    className="inline w-10 h-10 mr-3 text-white animate-spin" viewBox="0 0 100 101"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#5c96fd" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor" />
                </svg>)}
                </div>
            </div>
            {pathnameParts[2] === "nu" && (
            <div >
                <Link href={`/create-account/${pathnameParts[3]}/${id}`}>
                    <div 
                        className="min-h-full p-6 bg-white border border-white flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                        <div>
                            <div className="flex justify-center ">
                                <svg width="133" height="133" viewBox="0 0 133 133" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="133" height="133" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                            width="1" height="1">
                                            <use xlinkHref="#image0_3293_3346" transform="scale(0.01)" />
                                        </pattern>
                                        <image id="image0_3293_3346" width="100" height="100"
                                            xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-black text-lg font-bold hover:text-primary text-center">Access your account
                                </p>
                                <p className="p-4 text-center">
                                    Take control of your finances. Sign up for your account to access personalized tools and resources designed to empower your financial journey.
                                </p>
            
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)}
            {pathnameParts[2] === "ou" && (
            <div >
                <Link  href="https://portal.liqueous.com">
                    <div 
                        className="min-h-full p-6 bg-white border border-white flex justify-center items-center rounded-lg shadow-xl hover:border-primary hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                        <div>
                            <div className="flex justify-center ">
                                <svg width="133" height="133" viewBox="0 0 133 133" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="133" height="133" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                            width="1" height="1">
                                            <use xlinkHref="#image0_3293_3346" transform="scale(0.01)" />
                                        </pattern>
                                        <image id="image0_3293_3346" width="100" height="100"
                                            xlinkHref="data:image/png;base64,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" />
                                    </defs>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-black text-center text-lg font-bold hover:text-primary">Access your account
                                </p>
                                <p className="p-4 text-center">
                                    Take control of your finances. Sign in to your account to access personalized tools and resources designed to empower your financial journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>)}
            <div >
                <Link href="https://calendly.com/jacobfernane">
                    <div
                        className="min-h-full p-6 bg-white border border-white cursor-pointer flex justify-center items-center rounded-lg shadow-xl hover:border-primary  hover:shadow-xl hover:bg-[#f7f8fc] hover:-translate-y-1 hover:scale-100 duration-300">
                        <div>
                            <div className="flex justify-center">
                                <svg width="133" height="133" viewBox="0 0 133 133" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="133" height="133" fill="url(#pattern1)" />
                                    <defs>
                                        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1"
                                            height="1">
                                            <use xlinkHref="#image0_3293_3351" transform="scale(0.0104167)" />
                                        </pattern>
                                        <image id="image0_3293_3351" width="96" height="96"
                                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR4nO1dTU/UUBTtBv8BCUZXBIyCf0F+BW5sdWlCWPG1Exe4VHAm0hqXYglRg0zCBlDQxYxCMs5biJkH08RfQKJgNIaWa14nY0SEgaHvY+g5ydmV5J577rv39TYZLAsAAAAAAACQjNm3qxfnlvMv55YL2zFXCrPz7z506kq8afFIF5tbyW/lVgq0n/mt+TfvL6Q9HukQlXZQbKHG52mPRzrEET9ccP5r2uORjiOqjQTTHk/qBOcMi+fEuDVJ3Y4bPbS9cN32wu+OF9FRrCfYqfP3SfO08QjNVe3RhP2YupQl/voLOme70SPHDUOVgh3DDNhHNwxtN8refkIt8pPvRa+1C/YMM6B2KtxoSaoJceU3EFhvtr7g3qy65EuOJyOx55+s7QjecCNqH6S6gtsHKH5WdvLlxxPu3nTpSuIGCGcbEXxtbI9a++oLbu0j6hnbk26AonjGkzfADT83EkzHEB1bcMcQSTdARTy2G35K3gAv3GkkmLb+4wtu65dvgIp4bDfclmDA6QTPLK0eKnZmcTV+5rxCA2THY4wBtSN/9xk/VPDoFFfegmTHY4wBPfeqQ+/qyA+aXlg7IHZ6YY26R34qG8Kq4jHGgPjaN1CtukuDv+jO0434+AuOTvE/YuNr36Tc5KuMxxgDBMVLTU30/9g+QMpfxGTHY5QBceVNRvGRFn1VDELBzuHqMVdR+arjMc6AtNGCAREM0F2FDk6A/kQ4aEH6k+FoIGaAd8YMYDwgMDh2DmAA11swMIDDgFS3LAszIIABuquQ4QToTwRDC9KfDKaBxs2AjP/qSDLDn4cBPgzACeBoQYQWhBlAGMI+hjBuQRzXUMI11IAXHmYojXsRSxstGBDAAN1VyHACzN3tZLALggHYhvrYhhJaEL4HEL4H+BjC+CLm44sY4RqKVQRhFcH1v8ViF8Sbn1jGcRhg9FDNYBcEA7AL8rELIrQg7IIIuyAfQxi7IB+7IMI1FLsgwpsw179GwCqC608gdkG8uZn4Mq7Eg23dolizsBx8k2HAunZhvDlY4pXkf7q4VA4mdAtjzcP7yRuwudnFypXQAHFkOHeL/MtlSwYYr2QNEEgmU3QKSxaKxWIL45Ul3SKZoSzxYFHkSJoBf5mQEUdNt2BmDndF5UtP/r8zoVQOxsXEL/FgJ4XVviO0Mx48+Lixkfy/LAEAAAAAAAAAAAAAAACss4bfyP1RJO4v9LMAAAAASUVORK5CYII=" />
                                    </defs>
                                </svg>
                            </div>
                            <div className="mt-4">
                                <p className="text-black text-lg font-bold hover:text-primary text-center">Book a Meeting
                                </p>
                                <p className="p-4 text-center">
                                    If you have questions or need guidance, our expert advisors are here to help. Schedule a meeting with us to get the support you need.
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            
        </div>
    </section>
    <section>
    <div className="container my-[100px]">
        <div className="heading text-center">
            <div className="flex justify-center">
                <svg width="41" height="25" viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M28.0418 0.5L32.6287 5.08L22.8541 14.84L14.8421 6.84L0 21.68L2.82421 24.5L14.8421 12.5L22.8541 20.5L35.4729 7.92L40.0597 12.5V0.5H28.0418Z"
                        fill="#6C4FFE" />
                </svg>
            </div>

            <h4>Next Steps</h4>        

            <p> Next Steps for Your Financing Application</p>

            <div className="rounded-3xl bg-white mt-12 px-8 py-8 dark:bg-[#101626] w-full">
                <div className="heading text-center">

                    <div className="mt-8 flex text-left text-lg">
                        <span >
                            <p className="font-semibold">
                                Verify Email:
                            </p> 
                            <p className="mb-4">
                                If you haven't already, please verify your email address to continue the process.
                            </p>

                            <p className="font-semibold">
                                Visit Portal:
                            </p> 
                            <p className="mb-4">
                                <Link  href="https://portal.liqueous.com" className="text-primary font-bold">Click here</Link> to access your Liqueous portal.
                            </p>

                            <p className="font-semibold">
                                Login Using Your Mobile Number:
                            </p>
                            <p className="mb-4">
                                Sign in using the same mobile number you provided in your application.
                            </p> 

                            <p className="font-semibold">
                                Provide KYC and Bank Account Information:
                            </p> 
                            <p className="mb-4">
                                We'll need some additional details to complete your application. Please provide your KYC and bank account information securely within the portal.
                            </p>

                            <p className="font-semibold">
                                Accept the Final Terms:
                            </p> 
                            <p className="mb-4">
                                Review and accept the final terms and conditions within your portal.
                            </p>

                            <p className="font-semibold">
                                Sign the Digital Agreement:
                            </p> 
                            <p className="mb-4">
                                Keep an eye on your email for the digital agreement, which will be sent to you shortly. Once received, review and sign it electronically.
                            </p>

                            <p className="font-semibold">
                                Funds Transfer:
                            </p> 
                            <p className="mb-4">
                                After signing the agreement, please allow some time for the funds to be transferred to your designated bank account. We will notify you once the transfer is complete.
                            </p>

                            <p className="mb-4">
                                If you have any questions or need assistance at any point in this process, our dedicated support team is here to help. Feel free to reach out to us at our Toll Free Number: <Link className="text-primary" href="tel:+18665303357">(+1) 866-530-3357</Link> or contact us via email at <Link className="text-primary" href="mailto:info@liqueous.com">info@liqueous.com</Link>.
                            </p>

                            <p className="my-4">
                            </p>
                            
                        </span>
                    </div>
                    
                    

                </div>
            </div>

        </div>
    </div>
</section>
    </>
    
  )
}

export default Congratulations
