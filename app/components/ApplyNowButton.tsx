"use client";
import React, { useEffect, useState } from "react";
import Popup from "./PopUp/Popup";

const ApplyNowButton = () => {
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
        Apply Now
      </button>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ApplyNowButton;
