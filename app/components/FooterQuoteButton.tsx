
"use client";
import React, {  useState } from "react";
import Popup from "./PopUp/Popup";

const FooterQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false);



  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button
        className="mt-4 btn mx-auto block w-fit mr-auto ml-auto bg-primary text-white rounded-full"
        onClick={handleClick}
      >
       Get A Quote Today
      </button>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </div>
  );
};

export default FooterQuoteButton;
