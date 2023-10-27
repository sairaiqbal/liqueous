"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";
import firebaseApp from "@/firebaseConfig";
const CreateAccount = () => {
  const {
    control: control2,
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { isDirty: isDirty2, isValid: isValid2 },
  } = useForm();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
    setValue,
  } = useForm();
  const router = useParams();
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id = router.id[1];
  const transactionType = router.id[0];
  const [svg, setSvg] = useState(false);
  const [otp, setOtp] = useState(false);
  const [otpError, setOtpError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const [otpVerifier, setOtpVerifier] = useState<null | ConfirmationResult>(
    null
  );

  const onSelectBusiness = (selectedType: string) => {
    // Clear any existing validation rules for business-specific fields
    control.unregister("business_name");
    control.unregister("location_domicile");
    control.unregister("ein");
    control.unregister("business_address");
    control.unregister("signature");

    if (selectedType === "business") {
      // Set validation rules for business-specific fields
      control.register("business_name", {
        required: "Business Name is required",
      });
      control.register("location_domicile", {
        required: "Location Domicile is required",
      });
      control.register("ein", { required: "EIN is required" });
      control.register("business_address", {
        required: "Business Address is required",
      });
      control.register("signature", { required: "Signature is required" });
    }
  };

  const onSubmit = (data: any) => {
    setSvg(true);
    // console.log(data);
    // console.log(apiData?.who);
    // console.log(transactionType);
    // Create the payload object directly from the data object
    const payload = {
      who: (apiData as any)?.who, // Set your default value or use data.who
      option_looking_for: transactionType,
      loan_id: id,
      name: data.name,
      email: data.email,
      phone: data.phoneNo,
      individual_type: data.individual_type,
      address: data.address,
      city: data.city,
      zip: data.code,
      business: {},
    };

    if (data.certify_check === "business") {
      payload.business = {
        business_name: data.business_name,
        location_domicile: data.location_domicile,
        tin_no: data.ein,
        business_address: data.business_address,
        authorized_signatory: data.signature,
      };
    }

    const phone = `${payload.phone}`;
    sendFirebaseOTP(phone, () => {
      setTimeout(() => {
        // Replace 'enter-otp' with the desired scroll target ID
        // Implement your scroll function
      }, 100);
    });
  };

  // const auth = getAuth(firebaseApp);
  const sendFirebaseOTP = (phone: string, callback: { (): void; (): void }) => {
    const auth = getAuth(firebaseApp);
    auth.useDeviceLanguage();

    // Handle the Recaptcha
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha_container",
      {
        size: "invisible",
        callback: (response: any) => {
          console.log(
            "reCAPTCHA solved, allow signInWithPhoneNumber",
            response
          );
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
    // console.log(recaptchaVerifier)

    // setLoading(true);
    setOtp(true);

    signInWithPhoneNumber(auth, phone, recaptchaVerifier)
      .then((confirmationResult) => {
        console.log("SMS verification code sent:", confirmationResult);
        setOtpVerifier(confirmationResult);

        // SMS sent. Prompt the user to type the code from the message, then sign the user in with confirmationResult.confirm(code).
        setLoading(false);
        setShowPassword(true);

        callback();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Failed to send SMS verification code:", error);
        setFirebaseError(
          "Failed to send SMS verification code:" + error.message
        );
      });
  };

  const onSubmitForm2 = (data: any) => {
    console.log("Form 2 Data:", data);
  }
  useEffect(() => {
    fetch(`/api/quote/fetch_user_data?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setValue("name", data.name);
        setValue("email", data.email);
        setValue("phoneNo", data.phone);
        setApiData(data);
        setIsLoading(false);
        console.log(data);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>Testing here</div>
          <div className="overflow-x-hidden  bg-white dark:bg-gray-dark">
            <div className="overflow-hidden   pt-[82px] sm:-mx-[250px]  lg:-mx-[150px] lg:mb-[100px] my-[50px] pb-4">
              <div className="container lg:my-[50px] ">
                <div className="heading text-center">
                  <h4>
                    Create An <span className="text-primary"> Account </span>
                  </h4>

                  <p>
                    Simply submit the requested info below, and you will get an
                    estimate of{" "}
                  </p>
                  <p>the maximum loan amount available.</p>
                </div>
              </div>
              <div className="relative container ">
                <div className="absolute top-0 left-0 z-0 w-full  ">
                  <div className="container  h-[40rem]  bg-gradient-to-r to-transparent rounded-3xl lg:py-[50px] flex justify-around">
                    <div className="flex h-full w-full justify-between ">
                      <div className="h-full w-36 relative  left-[7%] flex items-end  ">
                        <img src="/assets/images/Graphic - Left.png" />
                      </div>
                      <div className="h-full w-36 relative  left-[-7%] flex items-start  ">
                        <svg
                          width="252"
                          height="252"
                          viewBox="0 0 252 252"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M111.723 14.1421C119.533 6.33165 132.197 6.33165 140.007 14.1421L237.588 111.723C245.398 119.533 245.398 132.197 237.588 140.007L140.007 237.588C132.197 245.398 119.533 245.398 111.723 237.588L14.1421 140.007C6.33162 132.197 6.33162 119.533 14.1421 111.723L111.723 14.1421Z"
                            fill="white"
                          />
                          <path
                            d="M177.355 177.095C148.918 205.532 102.812 205.532 74.3748 177.095C45.9375 148.657 45.9373 102.552 74.3748 74.1143C102.812 45.677 148.918 45.677 177.355 74.1143C205.793 102.552 205.792 148.657 177.355 177.095Z"
                            fill="#C8C2FC"
                          />
                          <path
                            d="M56.671 106.734C49.694 131.18 55.7385 158.458 74.8564 177.576C103.028 205.748 148.918 205.532 177.355 177.095C205.792 148.657 206.008 102.767 177.837 74.5959L126.347 126.086L56.671 106.734Z"
                            fill="#6C4FFE"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative container  flex justify-center z-10 pt-10">
                <div className="lg:w-3/4 bg-white px-4 py-12 dark:bg-[#101626] lg:px-8 rounded-3xl shadow-lg ">
                  <form id="estimateForm" onSubmit={handleSubmit(onSubmit)}>
                    <div className="heading mb-0 ">
                      <h2 className="text-2xl font-extrabold text-black dark:text-white">
                        Please complete all fields below
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="name"
                        >
                          Full Name
                        </label>
                        <input
                          type="name"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          className="block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                        />
                      </div>
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="email"
                        >
                          Email Address
                        </label>

                        <input
                          type="email"
                          className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                          ${errors.email ? "border-[#DC2828]" : ""}`}
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.email && (
                          <p className="error">
                            {String(errors.email.message)}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="phone"
                        >
                          Mobile Number
                        </label>
                        <div className="flex gap-2 justify-around">
                          <input
                            type="text"
                            className={`w-full rounded-2xl border-2 border-gray/20 bg-transparent p-3 font-bold outline-none transition focus:border-secondary ${
                              errors.phoneNo ? "border-[#DC2828]" : ""
                            }`}
                            {...register("phoneNo", {
                              required: "Mobile Number is required",
                              pattern: {
                                value: /\d{10}/,
                                message: "Invalid phone number format",
                              },
                            })}
                          />
                          {errors.phoneNo && (
                            <p className="error">
                              {String(errors.phoneNo.message)}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="relative">
                        <label className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white">
                          Individual Type
                        </label>
                        <select
                          {...register("individual_type", {
                            required: "Individual Type is required",
                          })}
                          className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                            errors.individual_type ? "border-[#DC2828]" : ""
                          }`}
                        >
                          <option value="Customer">Customer</option>
                          <option value="Authorized Signatory">
                            Authorized Signatory
                          </option>
                          <option value="Authorized Referral Agent">
                            Authorized Referral Agent
                          </option>
                        </select>
                        {errors.individual_type && (
                          <p className="error">
                            {String(errors.individual_type.message)}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="address"
                        >
                          Address
                        </label>
                        <input
                          id="address"
                          type="text"
                          {...register("address", {
                            required: "Address is required",
                          })}
                          className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                            errors.address ? "border-[#DC2828]" : ""
                          }`}
                        />
                        {errors.address && (
                          <p className="error">
                            {String(errors.address.message)}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="city"
                        >
                          City
                        </label>
                        <input
                          id="city"
                          type="text"
                          {...register("city", {
                            required: "City is required",
                          })}
                          className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                            errors.city ? "border-[#DC2828]" : ""
                          }`}
                        />
                        {errors.city && (
                          <p className="error">{String(errors.city.message)}</p>
                        )}
                      </div>
                      <div className="relative">
                        <label
                          className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                          htmlFor="code"
                        >
                          Zip Code
                        </label>
                        <input
                          id="code"
                          type="number"
                          {...register("code", {
                            required: "Zip Code is required",
                            pattern: {
                              value: /^\d{5}$/,
                              message: "Invalid Zip Code format",
                            },
                          })}
                          className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12 ${
                            errors.code ? "border-[#DC2828]" : ""
                          }`}
                        />
                        {errors.code && (
                          <p className="error">{String(errors.code.message)}</p>
                        )}
                      </div>
                    </div>
                    <div className="relative my-4">
                      <label className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white">
                        Are you an Individual or Business
                      </label>
                      <Controller
                        name="certify_check"
                        control={control}
                        render={({ field }) => (
                          <>
                            <label className="text-black">
                              <input
                                type="radio"
                                className="w-4 h-4"
                                {...field}
                                value="individual"
                                onClick={() => onSelectBusiness("individual")}
                              />
                              Individual
                            </label>
                            <label className="text-black ml-4">
                              <input
                                type="radio"
                                className="w-4 h-4"
                                {...field}
                                value="business"
                                onClick={() => onSelectBusiness("business")}
                              />
                              Business
                            </label>
                          </>
                        )}
                      ></Controller>
                    </div>
                    {/* <div className="relative my-4"> */}
                    {/* Render other form fields here based on your requirements */}
                    {watch("certify_check") === "business" && (
                      <>
                        <div className="relative my-4">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="business_name"
                          >
                            Business Name
                          </label>
                          <Controller
                            name="business_name"
                            control={control}
                            render={({ field }) => (
                              <input
                                id="business-name"
                                type="text"
                                className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12 ${
                                  errors.business_name ? "border-[#DC2828]" : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.business_name && (
                            <p className="error">
                              {String(errors.business_name.message)}
                            </p>
                          )}
                        </div>

                        <div className="relative my-4">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="location-domicile"
                          >
                            Location Domicile
                          </label>
                          <Controller
                            name="location_domicile"
                            control={control}
                            render={({ field }) => (
                              <input
                                id="location_domicile"
                                type="text"
                                className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12 ${
                                  errors.location_domicile
                                    ? "border-[#DC2828]"
                                    : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.location_domicile && (
                            <p className="error">
                              {String(errors.location_domicile.message)}
                            </p>
                          )}
                        </div>

                        <div className="relative my-4">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="business_name"
                          >
                            EIN/TIN#
                          </label>
                          <Controller
                            name="ein"
                            control={control}
                            render={({ field }) => (
                              <input
                                id="ein"
                                type="text"
                                className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12 ${
                                  errors.ein ? "border-[#DC2828]" : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.ein && (
                            <p className="error">
                              {String(errors.ein.message)}
                            </p>
                          )}
                        </div>

                        <div className="relative my-4">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="business_name"
                          >
                            Business Address
                          </label>
                          <Controller
                            name="business_address"
                            control={control}
                            render={({ field }) => (
                              <input
                                id="business_address"
                                type="text"
                                className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12 ${
                                  errors.business_address
                                    ? "border-[#DC2828]"
                                    : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.business_address && (
                            <p className="error">
                              {String(errors.business_address.message)}
                            </p>
                          )}
                        </div>

                        <div className="relative my-4">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="business_name"
                          >
                            Authorized Signatory
                          </label>
                          <Controller
                            name="signature"
                            control={control}
                            render={({ field }) => (
                              <input
                                id="signature"
                                type="text"
                                className={`block w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus-border-secondary ltr:pr-12 rtl:pl-12 ${
                                  errors.signature ? "border-[#DC2828]" : ""
                                }`}
                                {...field}
                              />
                            )}
                          />
                          {errors.signature && (
                            <p className="error">
                              {String(errors.signature.message)}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    <div className="my-6 flex justify-center text-center ltr:lg:text-right rtl:lg:text-left">
                      <button
                        type="submit"
                        disabled={!isValid || !isDirty}
                        // onClick={createAccount}
                        className="lg:w-1/3 w-full  btn bg-primary capitalize text-white p-3 dark:bg-primary dark:text-white dark:hover:bg-primary rounded-full disabled:bg-gray"
                      >
                        CREATE ACCOUNT
                        {svg && (
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 mr-3 ml-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    {/* </div> */}
                  </form>
                </div>
              </div>
              <section id="enter-otp" className="py-8  dark:bg-none">
                {otp && (
                  <div className="container">
                    <div className="relative flex justify-center z-10 ">
                      <form
                        className="rounded-3xl bg-white px-8 py-12 dark:bg-gray-dark lg:w-1/2 3-full mt-10 shadow-lg"
                        onSubmit={handleSubmit2(onSubmitForm2)}
                      >
                        <div className="relative">
                          <div id="recaptcha_container"></div>
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="otp"
                          >
                            Enter OTP
                          </label>
                          <input
                            id="otp"
                            type="password"
                            className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                            {...register2("otp2", { required: true })}
                          />
                        </div>

                        {otpError && (
                          <div className="text-sm text-[red] mt-2">
                            {otpError}
                          </div>
                        )}
                        <div className="w-full mt-6">
                          <label
                            className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
                            htmlFor="otp"
                          >
                            OTP Not Received?
                            <div
                              className="ml-2 text-md font-medium text-primary cursor-pointer hover:underline"
                              // onClick={resendOTPClick}
                            >
                              Resend
                            </div>
                          </label>
                        </div>
                        <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                          <div className="flex justify-center">
                            <button
                              //    onClick={verifyFirebaseOTP}
                              type="submit"
                              className="btn bg-primary px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary rounded-full disabled:bg-gray"
                            >
                              Verify OTP
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="#E5E7EB"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default CreateAccount;
