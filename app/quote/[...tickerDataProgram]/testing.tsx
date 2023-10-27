"use client";
import React, { useState } from 'react';
import { countries } from "@/app/Utils/countries";

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDialog, setShowDialog] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleCountrySelect = (country: React.SetStateAction<{ dial_code: string; flag: string; prefix: string; name: string; }>) => {
    setSelectedCountry(country);
    setShowDialog(false);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative inline-block w-48">
        <button
          className="w-full h-12 pl-4 pr-10 text-left border border-gray-300 rounded-md"
          onClick={() => setShowDialog(!showDialog)}
        >
          <span>{selectedCountry.flag} {selectedCountry.dial_code}</span>
        </button>
        {showDialog && (
          <div className="absolute z-10 mt-2 w-48 py-2 bg-white border border-gray-300 rounded-md">
            <input
              type="text"
              className="w-full px-2 py-1 border-b border-gray-300 focus:outline-none"
              placeholder="Search country"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="max-h-40 overflow-y-auto">
              {filteredCountries.map((country) => (
                <div
                  key={country.prefix}
                  className="px-2 py-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCountrySelect(country)}
                >
                  {country.flag} {country.dial_code} {country.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <input
        type="text"
        className="w-48 h-12 pl-4 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Enter phone number"
      />
    </div>
  );
};

export default PhoneNumberInput;
