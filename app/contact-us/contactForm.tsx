"use client";
import React, { useState } from "react";
import createUser from "@/app/Utils/createUser";
import { countries } from "../Utils/countries";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDialog, setShowDialog] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const [svg, setSvg] = useState(false);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCountrySelect = (
    country: React.SetStateAction<{
      dial_code: string;
      flag: string;
      prefix: string;
      name: string;
    }>
  ) => {
    setSelectedCountry(country);
    setShowDialog(false);
  };
  // Form handling
  const {
    register,
    handleSubmit,
    formState: { isValid },

    reset,
  } = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setSvg(true);
    const mobile = selectedCountry.dial_code + data.phone;
    const userData = {
      ...data,
      mobile: mobile,
      dialCode: selectedCountry.dial_code,
    };
    // console.log(userData);
    const apiRes = await createUser(userData);
    console.log(apiRes);
    if (apiRes) {
      setResponseText("Thank you. Our representative will contact you soon!");
    } else {
      setResponseText("unkown error");
    }

    reset();
    setSvg(false);
  };

  return (
    <div>
      <div className=" container  absolute top-0 left-0 z-10  flex justify-center mt-10 ">
        <form className="rounded-3xl bg-white px-4 py-10 dark:bg-[#101626] lg:w-5/12 lg:px-8 mb-4 shadow-lg w-11/12 ">
          <div className="relative mt-5">
            <label className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              {...register("full_name", { required: true })}
              className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-3 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
            />
          </div>
          <div className="relative mt-5">
            <label className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`w-full rounded-2xl border-2 border-gray/20 bg-transparent p-3 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12
                        [ngClass]="{'border-[#DC2828]': form.controls['email'].hasError('email')}"`}
            />
          </div>
          <div className="relative ">
            <label
              className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white"
              htmlFor="phone"
            >
              Mobile Number
            </label>
            <div className="flex gap-2 justify-around">
              <input
                type="hidden"
                // {...register("dial_code")}
                value={selectedCountry.dial_code}
              />
              <button
                onClick={() => setShowDialog(!showDialog)}
                className="w-[150px] rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary"
              >
                {selectedCountry.flag} {selectedCountry.dial_code}
              </button>

              <input
                {...register("phone", {
                  required: "phone is required",
                })}
                type="text"
                required
                className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
              />
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-2/3 -translate-y-1/2 right-4 rtl:left-4 dark:text-white"
            >
              <path
                d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* Adding modal for choosing Country Code */}
          {showDialog && (
            <div className="modal fixed z-10 inset-0">
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="flex items-center justify-center min-h-screen">
                <div className="modal-dialog w-[24rem] z-20">
                  <div className="modal-content bg-white p-4 pb-0 max-h-[26rem] rounded-lg">
                    <div className="sticky top-0 px-2">
                      <div className="flex justify-between mb-4">
                        <div className="">
                          <h2 className="  text-black font-bold text-xl ">
                            Select Area Code
                          </h2>
                        </div>

                        <div className="flex justify-end">
                          <button
                            onClick={() => setShowDialog(!showDialog)}
                            className=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-gray"
                            >
                              <path d="M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          placeholder="Search country..."
                          className="border border-gray/20 rounded-md py-2 px-4 w-full"
                          value={searchInput}
                          onChange={(e) => setSearchInput(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="max-h-[16rem] overflow-y-auto">
                      <ul>
                        {filteredCountries.map((country) => (
                          <div
                            key={country.prefix}
                            className="cursor-pointer px-2 py-2 hover:bg-[#BBBBBB] text-black flex justify-between "
                            onClick={() => handleCountrySelect(country)}
                          >
                            {country.flag} {country.dial_code} {country.name}
                          </div>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="relative mt-5">
            <label className="block text-black text-base font-bold mb-2 dark:bg-[#101626] dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              {...register("message", { required: true })}
              rows={4}
              required
              className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-3 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
            ></textarea>
            <div className="flex justify-center text-center">
              <p className="w-4/5 pt-5">
                We value your privacy and guarantee that your information will
                remain confidential.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center ltr:lg:text-right rtl:lg:text-left flex justify-center">
            <button
              onClick={handleSubmit(onSubmit)}
              type="submit"
              disabled={!isValid}
              className="w-5/12 btn bg-primary capitalize text-white p-3 dark:bg-primary dark:text-white dark:hover:bg-primary rounded-full disabled:bg-gray"
            >
              SUBMIT
              {svg && (
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
              )}
            </button>
          </div>
          <div className="relative mt-10 mb-10 text-center text-sm text-[green] ltr:lg:text-right rtl:lg:text-left">
            {responseText}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
