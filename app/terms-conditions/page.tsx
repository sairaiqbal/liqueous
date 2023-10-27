import React from "react";

const Terms = () => {
  return (
    <div>
      <div>
        <div className="overflow-hidden  sm:-mx-[250px]  lg:-mx-[150px] ">
          <div className="relative ">
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
            <div className="container  pt-14">
              <div className="heading text-center mb-6">
                <h4 className="font-extrabold">
                  Terms And <span className="text-primary">Conditions</span>{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.318 10.364L24.938 6.8L28.5 5.182L24.938 3.563L23.318 0L21.7 3.563L18.136 5.182L21.7 6.8L23.318 10.364ZM13.602 11.012L10.364 3.886L7.125 11.011L0 14.25L7.125 17.489L10.364 24.614L13.6 17.489L20.725 14.25L13.602 11.012ZM23.318 18.137L21.7 21.7L18.138 23.319L21.7 24.938L23.318 28.5L24.937 24.938L28.5 23.318L24.938 21.7L23.318 18.137Z"
                    fill="#5C96FD"
                  />
                </svg>
              </div>

              <div className=" flex justify-center text-center items-end ">
                <div className=" lg:w-[77%] lg:px-14 lg:pb-4 pb-2 px-2 w-full dark:bg-black ">
                  <p className="pt-30 lg:pt-6">
                    Please take a moment to review our terms and conditions
                    before using our website. These terms serve as a guideline
                    for your interaction with our platform, covering aspects
                    such as services, user responsibilities, and privacy
                    policies. By accessing our website, you indicate your
                    understanding and agreement to comply with these terms. They
                    are designed to ensure transparency and foster a positive
                    relationship between you and our company. Your continued use
                    of our website signifies your acceptance of these terms and
                    conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-14 md:py-[100px]">
          <div className="container">
            {/* <!-- <div className="pb-12">
                <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Terms and Conditions</h4>
                <p className="pb-5 text-lg font-medium">
                    Last updated: April 19, 2023
                </p>
                <p className="pb-5 text-lg font-medium">
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
                    Your information when You use the
                    Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p className="pb-5 text-lg font-medium">
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                    collection and use of information
                    in accordance with this Privacy Policy.
                </p>

            </div> --> */}
            <div className="pb-12">
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Interpretation and Definitions
              </h4>
              <h6 className="pb-2 font-semibold text-black">Interpretation</h6>
              <p className="pb-5 text-lg font-medium">
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <h6 className="pb-2 font-semibold text-black">Definitions</h6>
              <p className="text-lg font-medium">
                For the purposes of this Privacy Policy:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Account means a unique account created for You to access our
                  Service or parts of our Service.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Affiliate means an entity that controls, is controlled by or
                  is under common control with a party, where “control” means
                  ownership of 50% or more of the shares, equity interest or
                  other securities entitled to vote for election of directors or
                  other managing authority.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Business, for the purpose of CCPA/CPRA, refers to the Company
                  as the legal entity that collects Consumers’ personal
                  information and determines the purposes and means of the
                  processing of Consumers’ personal information, or on behalf of
                  which such information is collected and that alone, or jointly
                  with others, determines the purposes and means of the
                  processing of consumers’ personal information, that does
                  business in the State of California.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  CCPA and/or CPRA refers to California Consumer Privacy Act
                  (the “CCPA”) as amended by the California Privacy Rights Act
                  of 2020 (the “CPRA”).</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Company (referred to as either “the Company”, “We”, “Us” or
                  “Our” in this Agreement) refers to Liqueous LLC,
                  info@liqueous.com. For the purpose of the GDPR, the Company is
                  the Data Controller.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Consumer, for the purpose of the CCPA/CPRA, means a natural
                  person who is a California resident. A resident, as defined in
                  the law, includes (1) every individual who is in the USA for
                  other than a temporary or transitory purpose, and (2) every
                  individual who is domiciled in the USA who is outside the USA
                  for a temporary or transitory purpose.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Cookies are small files that are placed on Your computer,
                  mobile device or any other device by a website, containing the
                  details of Your browsing history on that website among its
                  many uses.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Country refers to: Nevada, United States</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Data Controller, for the purposes of the GDPR (General Data
                  Protection Regulation), refers to the Company as the legal
                  person which alone or jointly with others determines the
                  purposes and means of the processing of Personal Data.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Device means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Do Not Track (DNT) is a concept that has been promoted by US
                  regulatory authorities, in particular the U.S. Federal Trade
                  Commission (FTC), for the Internet industry to develop and
                  implement a mechanism for allowing internet users to control
                  the tracking of their online activities across websites.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  GDPR refers to EU General Data Protection Regulation.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  ersonal Data is any information that relates to an identified
                  or identifiable individual. For the purposes of GDPR, Personal
                  Data means any information relating to You such as a name, an
                  identification number, location data, online identifier or to
                  one or more factors specific to the physical, physiological,
                  genetic, mental, economic, cultural or social identity. For
                  the purposes of the CCPA/CPRA, Personal Data means any
                  information that identifies, relates to, describes or is
                  capable of being associated with, or could reasonably be
                  linked, directly or indirectly, with You.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Service refers to the Website.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Service Provider means any natural or legal person who
                  processes the data on behalf of the Company. It refers to
                  third-party companies or individuals employed by the Company
                  to facilitate the Service, to provide the Service on behalf of
                  the Company, to perform services related to the Service or to
                  assist the Company in analyzing how the Service is used. For
                  the purpose of the GDPR, Service Providers are considered Data
                  Processors.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Third-party Social Media Service refers to any website or any
                  social network website through which a User can log in or
                  create an account to use the Service.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Usage Data refers to data collected automatically, either
                  generated by the use of the Service or from the Service
                  infrastructure itself (for example, the duration of a page
                  visit).</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  TWebsite refers to Liqueous, accessible from
                  https://liqueous.com</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  You means the individual accessing or using the Service, or
                  the company, or other legal entity on behalf of which such
                  individual is accessing or using the Service, as applicable.
                  Under GDPR, You can be referred to as the Data Subject or as
                  the User as you are the individual using the Service.</p>
                </li>
              </ul>
            </div>
            <div className="pb-12">
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Collecting and Using Your Personal Data
              </h4>
              <h6 className="pb-2 font-semibold text-black">
                Types of Data Collected
              </h6>
              <h6 className="pb-2 font-semibold text-black">Personal Data</h6>
              <p className="pb-5 text-lg font-medium">
                While using Our Service, We may ask You to provide Us with
                certain personally identifiable information that can be used to
                contact or identify You. Personally identifiable information may
                include, but is not limited to:
              </p>

              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Email address</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  First name and last name</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Phone number</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Address, State, Province, ZIP/Postal code, City</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Usage Data</p>
                </li>
              </ul>
              <h6 className="pb-2 font-semibold text-black">Usage Data</h6>
              <p className="pb-5 text-lg font-medium">
                Usage Data is collected automatically when using the Service.
              </p>
              <p className="pb-5 text-lg font-medium">
                Usage Data may include information such as Your Device’s
                Internet Protocol address (e.g. IP address), browser type,
                browser version, the pages of our Service that You visit, the
                time and date of Your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </p>
              <p className="pb-5 text-lg font-medium">
                When You access the Service by or through a mobile device, We
                may collect certain information automatically, including, but
                not limited to, the type of mobile device You use, Your mobile
                device unique ID, the IP address of Your mobile device, Your
                mobile operating system, the type of mobile Internet browser You
                use, unique device identifiers and other diagnostic data.
              </p>
              <p className="pb-5 text-lg font-medium">
                We may also collect information that Your browser sends whenever
                You visit our Service or when You access the Service by or
                through a mobile device.
              </p>
              <h6 className="pb-2 font-semibold text-black">
                Information from Third-Party Social Media Services
              </h6>
              <p className="pb-5 text-lg font-medium">
                The Company allows You to create an account and log in to use
                the Service through the following Third-party Social Media
                Services:
              </p>
              <ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Google</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Facebook</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Twitter</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  LinkedIn</p>
                </li>
              </ul>
              <p className="pb-5 text-lg font-medium">
                If You decide to register through or otherwise grant us access
                to a Third-Party Social Media Service, We may collect Personal
                data that is already associated with Your Third-Party Social
                Media Service’s account, such as Your name, Your email address,
                Your activities or Your contact list associated with that
                account.
              </p>
              <p className="pb-5 text-lg font-medium">
                You may also have the option of sharing additional information
                with the Company through Your Third-Party Social Media Service’s
                account. If You choose to provide such information and Personal
                Data, during registration or otherwise, You are giving the
                Company permission to use, share, and store it in a manner
                consistent with this Privacy Policy.
              </p>
              <h6 className="pb-2 font-semibold text-black">
                Tracking Technologies and Cookies
              </h6>
              <p className="pb-5 text-lg font-medium">
                We use Cookies and similar tracking technologies to track the
                activity on Our Service and store certain information. Tracking
                technologies used are beacons, tags, and scripts to collect and
                track information and to improve and analyze Our Service. The
                technologies We use may include:stration or otherwise, You are
                giving the Company permission to use, share, and store it in a
                manner consistent with this Privacy Policy.
              </p>
              <ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Cookies or Browser Cookies. A cookie is a small file placed on
                  Your Device. You can instruct Your browser to refuse all
                  Cookies or to indicate when a Cookie is being sent. However,
                  if You do not accept Cookies, You may not be able to use some
                  parts of our Service. Unless you have adjusted Your browser
                  setting so that it will refuse Cookies, our Service may use
                  Cookies.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Web Beacons. Certain sections of our Service and our emails
                  may contain small electronic files known as web beacons (also
                  referred to as clear gifs, pixel tags, and single-pixel gifs)
                  that permit the Company, for example, to count users who have
                  visited those pages or opened an email and for other related
                  website statistics (for example, recording the popularity of a
                  certain section and verifying system and server integrity).</p>
                </li>
              </ul>
              <p className=" pb-5 text-lg font-medium">
                Cookies can be “Persistent” or “Session” Cookies. Persistent
                Cookies remain on Your personal computer or mobile device when
                You go offline, while Session Cookies are deleted as soon as You
                close Your web browser. Learn more about cookies on the Free
                Privacy Policy website article.
              </p>
              <p className="pb-5 text-lg font-medium">
                We use both Session and Persistent Cookies for the purposes set
                out below:
              </p>
              <ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Necessary / Essential Cookies Type: Session Cookies
                  Administered by: Us Purpose: These Cookies are essential to
                  provide You with services available through the Website and to
                  enable You to use some of its features. They help to
                  authenticate users and prevent fraudulent use of user
                  accounts. Without these Cookies, the services that You have
                  asked for cannot be provided, and We only use these Cookies to
                  provide You with those services.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Cookies Policy / Notice Acceptance Cookies Type: Persistent
                  Cookies Administered by: Us Purpose: These Cookies identify if
                  users have accepted the use of cookies on the Website.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Functionality Cookies Type: Persistent Cookies Administered
                  by: Us Purpose: These Cookies allow us to remember choices You
                  make when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Tracking and Performance Cookies Type: Persistent Cookies
                  Administered by: Third-Parties Purpose: These Cookies are used
                  to track information about traffic to the Website and how
                  users use the Website. The information gathered via these
                  Cookies may directly or indirectly identify you as an
                  individual visitor. This is because the information collected
                  is typically linked to a pseudonymous identifier associated
                  with the device you use to access the Website. We may also use
                  these Cookies to test new pages, features or new functionality
                  of the Website to see how our users react to them.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Targeting and Advertising Cookies Type: Persistent Cookies
                  Administered by: Third-Parties Purpose: These Cookies track
                  your browsing habits to enable Us to show advertising which is
                  more likely to be of interest to You. These Cookies use
                  information about your browsing history to group You with
                  other users who have similar interests. Based on that
                  information, and with Our permission, third party advertisers
                  can place Cookies to enable them to show adverts which We
                  think will be relevant to your interests while You are on
                  third party websites.</p>
                </li>
              </ul>
              <p className="text-lg font-medium">
                For more information about the cookies we use and your choices
                regarding cookies, please visit our Cookies Policy or the
                Cookies section of our Privacy Policy.
              </p>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Use of Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                The Company may use Personal Data for the following purposes:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To manage Your Account: to manage Your registration as a user
                  of the Service. The Personal Data You provide can give You
                  access to different functionalities of the Service that are
                  available to You as a registered user.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a mobile application’s push notifications regarding updates or
                  informative communications related to the functionalities,
                  products or contracted services, including the security
                  updates, when necessary or reasonable for their
                  implementation.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To manage Your requests: To attend and manage Your requests to
                  Us.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  To deliver targeted advertising to You: We may use Your
                  information to develop and display content and advertising
                  (and work with third-party vendors who do so) tailored to Your
                  interests and/or location and to measure its effectiveness.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  For business transfers: We may use Your information to
                  evaluate or conduct a merger, divestiture, restructuring,
                  reorganization, dissolution, or other sale or transfer of some
                  or all of Our assets, whether as a going concern or as part of
                  bankruptcy, liquidation, or similar proceeding, in which
                  Personal Data held by Us about our Service users is among the
                  assets transferred.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  For other purposes: We may use Your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.</p>
                </li>
              </ul>
              <p className=" pb-5 text-lg font-medium">
                We may share Your personal information in the following
                situations:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to show advertisements to You to help support and
                  maintain Our Service, to advertise on third party websites to
                  You after You visited our Service, to contact You.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  For business transfers: We may share or transfer Your personal
                  information in connection with, or during negotiations of, any
                  merger, sale of Company assets, financing, or acquisition of
                  all or a portion of Our business to another company.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  With Affiliates: We may share Your information with Our
                  affiliates, in which case we will require those affiliates to
                  honor this Privacy Policy. Affiliates include Our parent
                  company and any other subsidiaries, joint venture partners or
                  other companies that We control or that are under common
                  control with Us.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  With business partners: We may share Your information with Our
                  business partners to offer You certain products, services or
                  promotions.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  With other users: when You share personal information or
                  otherwise interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside. If You interact with other users or
                  register through a Third-Party Social Media Service, Your
                  contacts on the Third-Party Social Media Service may see Your
                  name, profile, pictures and description of Your activity.
                  Similarly, other users will be able to view descriptions of
                  Your activity, communicate with You and view Your profile.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  With Your consent: We may disclose Your personal information
                  for any other purpose with Your consent.</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Retention of Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                The Company will retain Your Personal Data only for as long as
                is necessary for the purposes set out in this Privacy Policy. We
                will retain and use Your Personal Data to the extent necessary
                to comply with our legal obligations (for example, if we are
                required to retain your data to comply with applicable laws),
                resolve disputes, and enforce our legal agreements and policies.
              </p>
              <p className="pb-5 text-lg font-medium">
                The Company will also retain Usage Data for internal analysis
                purposes. Usage Data is generally retained for a shorter period
                of time, except when this data is used to strengthen the
                security or to improve the functionality of Our Service, or We
                are legally obligated to retain this data for longer time
                periods.
              </p>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Transfer of Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                Your information, including Personal Data, is processed at the
                Company’s operating offices and in any other places where the
                parties involved in the processing are located. It means that
                this information may be transferred to — and maintained on —
                computers located outside of Your state, province, country or
                other governmental jurisdiction where the data protection laws
                may differ than those from Your jurisdiction.
              </p>
              <p className="pb-5 text-lg font-medium">
                Your consent to this Privacy Policy followed by Your submission
                of such information represents Your agreement to that transfer.
              </p>
              <p className="pb-5 text-lg font-medium">
                The Company will take all steps reasonably necessary to ensure
                that Your data is treated securely and in accordance with this
                Privacy Policy and no transfer of Your Personal Data will take
                place to an organization or a country unless there are adequate
                controls in place including the security of Your data and other
                personal information..
              </p>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Delete Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                You have the right to delete or request that We assist in
                deleting the Personal Data that We have collected about You.
              </p>
              <p className="pb-5 text-lg font-medium">
                Our Service may give You the ability to delete certain
                information about You from within the Service.
              </p>
              <p className="pb-5 text-lg font-medium">
                You may update, amend, or delete Your information at any time by
                signing in to Your Account, if you have one, and visiting the
                account settings section that allows you to manage Your personal
                information. You may also contact Us to request access to,
                correct, or delete any personal information that You have
                provided to Us.
              </p>
              <p className="pb-5 text-lg font-medium">
                Please note, however, that We may need to retain certain
                information when we have a legal obligation or lawful basis to
                do so.
              </p>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Disclosure of Your Personal Data
              </h4>
              <h6 className="pb-2 font-semibold text-black">
                Business Transactions
              </h6>
              <p className="pb-5 text-lg font-medium">
                If the Company is involved in a merger, acquisition or asset
                sale, Your Personal Data may be transferred. We will provide
                notice before Your Personal Data is transferred and becomes
                subject to a different Privacy Policy.
              </p>
              <h6 className="pb-2 font-semibold text-black">Law enforcement</h6>
              <p className="pb-5 text-lg font-medium">
                Under certain circumstances, the Company may be required to
                disclose Your Personal Data if required to do so by law or in
                response to valid requests by public authorities (e.g. a court
                or a government agency).
              </p>
              <h6 className="pb-2 font-semibold text-black">
                Other legal requirements
              </h6>
              <p className="pb-5 text-lg font-medium">
                The Company may disclose Your Personal Data in the good faith
                belief that such action is necessary to:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Comply with a legal obligation</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Protect and defend the rights or property of the Company</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Prevent or investigate possible wrongdoing in connection with
                  the Service</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Protect the personal safety of Users of the Service or the
                  public</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Protect against legal liability</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Security of Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                The security of Your Personal Data is important to Us, but
                remember that no method of transmission over the Internet, or
                method of electronic storage is 100% secure. While We strive to
                use commercially acceptable means to protect Your Personal Data,
                We cannot guarantee its absolute security.
              </p>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Detailed Information on the Processing of Your Personal Data
              </h4>
              <p className="pb-5 text-lg font-medium">
                The Service Providers We use may have access to Your Personal
                Data. These third-party vendors collect, store, use, process and
                transfer information about Your activity on Our Service in
                accordance with their Privacy Policies.
              </p>
              <h6 className="pb-2 font-semibold text-black">Analytics</h6>
              <p className="pb-5 text-lg font-medium">
                We may use third-party Service providers to monitor and analyze
                the use of our Service.
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Google Analytics Google Analytics is a web analytics service
                  offered by Google that tracks and reports website traffic.
                  Google uses the data collected to track and monitor the use of
                  our Service. This data is shared with other Google services.
                  Google may use the collected data to contextualize and
                  personalize the ads of its own advertising network. You can
                  opt-out of having made your activity on the Service available
                  to Google Analytics by installing the Google Analytics opt-out
                  browser add-on. The add-on prevents the Google Analytics
                  JavaScript (ga.js, analytics.js and dc.js) from sharing
                  information with Google Analytics about visits activity. For
                  more information on the privacy practices of Google, please
                  visit the Google Privacy & Terms web page:
                  https://policies.google.com/privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Mixpanel Mixpanel is provided by Mixpanel Inc. You can prevent
                  Mixpanel from using your information for analytics purposes by
                  opting-out. To opt-out of Mixpanel service, please visit this
                  page: https://mixpanel.com/optout/ For more information on
                  what type of information Mixpanel collects, please visit the
                  Terms of Use page of Mixpanel: https://mixpanel.com/terms/</p>
                </li>
              </ul>
              <h6 className="pb-2 font-semibold text-black">Advertising</h6>
              <p className="pb-5 text-lg font-medium">
                We may use Service Providers to show advertisements to You to
                help support and maintain Our Service.
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Google AdSense & DoubleClick Cookie Google, as a third party
                  vendor, uses cookies to serve ads on our Service. Google’s use
                  of the DoubleClick cookie enables it and its partners to serve
                  ads to our users based on their visit to our Service or other
                  websites on the Internet. You may opt out of the use of the
                  DoubleClick Cookie for interest-based advertising by visiting
                  the Google Ads Settings web page:
                  http://www.google.com/ads/preferences/</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  AdMob by Google AdMob by Google is provided by Google Inc. You
                  can opt-out from the AdMob by Google service by following the
                  instructions described by Google:
                  https://support.google.com/ads/answer/2662922?hl=en For more
                  information on how Google uses the collected information,
                  please visit the “How Google uses data when you use our
                  partners’ sites or app” page:
                  https://policies.google.com/technologies/partner-sites or
                  visit the Privacy Policy of Google:
                  https://policies.google.com/privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Bing Ads Bing Ads is an advertising service provided by
                  Microsoft Inc. You can opt-out from Bing Ads by following the
                  instructions on Bing Ads Opt-out page:
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                  For more information about Bing Ads, please visit their
                  Privacy Policy:
                  https://privacy.microsoft.com/en-us/PrivacyStatement</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Flurry Flurry is provided by Yahoo! Inc. You can opt-out of
                  the Flurry service and prevent it from using and sharing your
                  information by visiting the Flurry Opt-out page:
                  https://developer.yahoo.com/flurry/end-user-opt-out/ For more
                  information on the privacy practices policies of Yahoo!,
                  please visit their Privacy Policy:
                  https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  AppLovin AppLovin is provided by the AppLovin Corporation. If
                  you’d like to opt-out from AppLovin service, please visit the
                  AppLovin Opt-out page: https://www.applovin.com/optout If
                  you’d like to learn more about AppLovin, please visit the
                  Privacy Policy page of AppLovin:
                  https://www.applovin.com/privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Vungle Vungle is provided by Vungle Inc. You can opt-out from
                  Vungle service by following the instructions as described by
                  Vungle on their Privacy Policy page:
                  http://vungle.com/privacy/ For more information about Vungle,
                  please visit Vungle Privacy Policy: http://vungle.com/privacy/</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  AdButler AdButler is an advertising service provided by
                  Sparklit Networks Inc. For more information about AdButler,
                  please visit their Privacy Policy:
                  https://www.sparklit.com/agreements.spark?agreement=privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Unity Ads Unity Ads is provided by Unity Technologies. Unity
                  Ads collects, stores, uses, processes, and transfers personal
                  information to provide, operate, and improve Unity
                  Technologies services, including personalized advertising
                  services. For more information on what type of information
                  Unity Technologies collects, please visit their Privacy Policy
                  page: https://unity3d.com/legal/privacy-policy. You can
                  prevent Unity Ads from using your information by opting-out.
                  To opt-out of Unity Analytics, please visit this page:
                  https://unity3d.com/legal/privacy-policy You may opt-out of
                  all personalized advertising by enabling privacy features on
                  Your mobile device such as Limit Ad Tracking (iOS) and Opt Out
                  of Ads Personalization (Android). See Your mobile device Help
                  system for more information.</p>
                </li>
              </ul>

              <h6 className="pb-2 font-semibold text-black">Email Marketing</h6>
              <p className="pb-5 text-lg font-medium">
                We may use Your Personal Data to contact You with newsletters,
                marketing or promotional materials and other information that
                may be of interest to You. You may opt-out of receiving any, or
                all, of these communications from Us by following the
                unsubscribe link or instructions provided in any email We send
                or by contacting Us.
              </p>
              <p className="pb-5 text-lg font-medium">
                We may use Email Marketing Service Providers to manage and send
                emails to You.
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Customer.io – Apollo.io – Sendgrid.com Their Privacy Policy
                  can be viewed at https://www.apollo.io/privacy-policy</p>
                </li>
              </ul>
              <h6 className="pb-2 font-semibold text-black">
                Behavioral Remarketing
              </h6>
              <p className="pb-5 text-lg font-medium">
                The Company uses remarketing services to advertise to You after
                You accessed or visited our Service. We and Our third-party
                vendors use cookies and non-cookie technologies to help Us
                recognize Your Device and understand how You use our Service so
                that We can improve our Service to reflect Your interests and
                serve You advertisements that are likely to be of more interest
                to You.
              </p>
              <p className="pb-5 text-lg font-medium">
                These third-party vendors collect, store, use, process and
                transfer information about Your activity on Our Service in
                accordance with their Privacy Policies and to enable Us to:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Measure and analyze traffic and browsing activity on Our
                  Service</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Show advertisements for our products and/or services to You on
                  third-party websites or apps</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Measure and analyze the performance of Our advertising
                  campaigns</p>
                </li>
              </ul>

              <p className="pb-5 text-lg font-medium">
                Some of these third-party vendors may use non-cookie
                technologies that may not be impacted by browser settings that
                block cookies. Your browser may not permit You to block such
                technologies. You can use the following third-party tools to
                decline the collection and use of information for the purpose of
                serving You interest-based advertising:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  The NAI’s opt-out platform:
                  http://www.networkadvertising.org/choices/</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  The EDAA’s opt-out platform http://www.youronlinechoices.com/</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  The DAA’s opt-out platform:
                  http://optout.aboutads.info/?c=2&lang=EN</p>
                </li>
              </ul>
              <p className="pb-5 text-lg font-medium">
                You may opt-out of all personalized advertising by enabling
                privacy features on Your mobile device such as Limit Ad Tracking
                (iOS) and Opt Out of Ads Personalization (Android). See Your
                mobile device Help system for more information.
              </p>
              <p className="pb-5 text-lg font-medium">
                We may share information, such as hashed email addresses (if
                available) or other online identifiers collected on Our Service
                with these third-party vendors. This allows Our third-party
                vendors to recognize and deliver You ads across devices and
                browsers. To read more about the technologies used by these
                third-party vendors and their cross-device capabilities please
                refer to the Privacy Policy of each vendor listed below.
              </p>
              <p className="pb-5 text-lg font-medium">
                The third-party vendors We use are:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Google Ads (AdWords) Google Ads (AdWords) remarketing service
                  is provided by Google Inc. You can opt-out of Google Analytics
                  for Display Advertising and customise the Google Display
                  Network ads by visiting the Google Ads Settings page:
                  http://www.google.com/settings/ads Google also recommends
                  installing the Google Analytics Opt-out Browser Add-on –
                  https://tools.google.com/dlpage/gaoptout – for your web
                  browser. Google Analytics Opt-out Browser Add-on provides
                  visitors with the ability to prevent their data from being
                  collected and used by Google Analytics. For more information
                  on the privacy practices of Google, please visit the Google
                  Privacy & Terms web page: https://policies.google.com/privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  AdRoll AdRoll remarketing service is provided by NextRoll,
                  Inc. You can opt-out of AdRoll remarketing by visiting this
                  AdRoll Advertising Preferences web page:
                  http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false or the
                  Opt Out of Personalized Advertising web page:
                  https://help.adroll.com/hc/en-us/articles/216599538-Opting-Out-of-Personalized-Advertising
                  If You are a California resident, please read the “Information
                  For California Residents Only” section in the Privacy Policy
                  of NextRoll, Inc.: https://www.nextroll.com/privacy#service-13
                  For more information on the privacy practices of AdRoll,
                  please visit the NextRoll, Inc. Privacy Policy web page:
                  https://www.nextroll.com/privacy</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Perfect Audience Perfect Audience remarketing service is
                  provided by NowSpots Inc. You can opt-out of Perfect Audience
                  remarketing by visiting these pages: Platform Opt-out
                  (http://pixel.prfct.co/coo) and Partner Opt-out
                  (http://ib.adnxs.com/optout). For more information on the
                  privacy practices of Perfect Audience, please visit the
                  Perfect Audience Privacy Policy & Opt-out web page:
                  https://www.perfectaudience.com/privacy/</p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                GDPR Privacy
              </h4>
              <h6 className="pb-2 font-semibold text-black">
                Legal Basis for Processing Personal Data under GDPR
              </h6>
              <p className="pb-5 text-lg font-medium">
                We may process Personal Data under the following conditions:
              </p>
              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Consent: You have given Your consent for processing Personal
                  Data for one or more specific purposes.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Performance of a contract: Provision of Personal Data is
                  necessary for the performance of an agreement with You and/or
                  for any pre-contractual obligations thereof.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Legal obligations: Processing Personal Data is necessary for
                  compliance with a legal obligation to which the Company is
                  subject.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Vital interests: Processing Personal Data is necessary in
                  order to protect Your vital interests or of another natural
                  person.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Public interests: Processing Personal Data is related to a
                  task that is carried out in the public interest or in the
                  exercise of official authority vested in the Company.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Legitimate interests: Processing Personal Data is necessary
                  for the purposes of the legitimate interests pursued by the
                  Company.</p>
                </li>
              </ul>
              <p className="pb-5 text-lg font-medium">
                In any case, the Company will gladly help to clarify the
                specific legal basis that applies to the processing, and in
                particular whether the provision of Personal Data is a statutory
                or contractual requirement, or a requirement necessary to enter
                into a contract.
              </p>
              <h6 className="pb-2 font-semibold text-black">
                Your Rights under the GDPR
              </h6>
              <p className="pb-5 text-lg font-medium">
                The Company undertakes to respect the confidentiality of Your
                Personal Data and to guarantee You can exercise Your rights.
              </p>
              <p className="pb-5 text-lg font-medium">
                You have the right under this Privacy Policy, and by law if You
                are within the EU, to:
              </p>

              <ul className="pb-5 text-lg font-medium">
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Request access to Your Personal Data. The right to access,
                  update or delete the information We have on You. Whenever made
                  possible, you can access, update or request deletion of Your
                  Personal Data directly within Your account settings section.
                  If you are unable to perform these actions yourself, please
                  contact Us to assist You. This also enables You to receive a
                  copy of the Personal Data We hold about You.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Request correction of the Personal Data that We hold about
                  You. You have the right to have any incomplete or inaccurate
                  information We hold about You corrected.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Object to processing of Your Personal Data. This right exists
                  where We are relying on a legitimate interest as the legal
                  basis for Our processing and there is something about Your
                  particular situation, which makes You want to object to our
                  processing of Your Personal Data on this ground. You also have
                  the right to object where We are processing Your Personal Data
                  for direct marketing purposes.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Request erasure of Your Personal Data. You have the right to
                  ask Us to delete or remove Personal Data when there is no good
                  reason for Us to continue processing it.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Request the transfer of Your Personal Data. We will provide to
                  You, or to a third-party You have chosen, Your Personal Data
                  in a structured, commonly used, machine-readable format.
                  Please note that this right only applies to automated
                  information which You initially provided consent for Us to use
                  or where We used the information to perform a contract with
                  You.</p>
                </li>
                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0"><p className="pl-4">
                  Withdraw Your consent. You have the right to withdraw Your
                  consent on using your Personal Data. If You withdraw Your
                  consent, We may not be able to provide You with access to
                  certain specific functionalities of the Service.</p>
                </li>
              </ul>

              <h6 className="pb-2 font-semibold text-black">
                Exercising of Your GDPR Data Protection Rights
              </h6>
              <p className="pb-5 text-lg font-medium">
                The Company uses remarketing services to advertise to You after
                You accessed or visited our Service. We and Our third-party
                vendors use cookies and non-cookie technologies to help Us
                recognize Your Device and understand how You use our Service so
                that We can improve our Service to reflect Your interests and
                serve You advertisements that are likely to be of more interest
                to You.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
