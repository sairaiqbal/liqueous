import Link from 'next/link';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative text-center mt-4">
                        <div className="relative max-w-sm mr-auto ml-auto">
                            <div>
                                {/* <input #tickerSearch type="text" placeholder="Search (AAPL, GOOG) etc." className="w-full rounded-full pt-4 px-4 py-4 text-black font-bold  border-2 border-gray/20 outline-none transition focus:border-primary  shadow 
                                    " [formControl]="searchControl" (focus)="fetchOptions = canOpenOptions = true"
                                    (blur)="onBlurTickerSearch()"
                                    (keydown)="$event.key === 'Escape' ? tickerSearch.blur() : true"
                                    [ngClass]="{'border-[#DC2828]': searchControl.hasError('required')}" /> */}
                                <input type='text' placeholder='Search (AAPL, GOOG) etc.'className="w-full rounded-full pt-4 px-4 py-4 text-black font-bold  border-2 border-gray/20 outline-none transition focus:border-primary  shadow"   />                            

                                <div className="absolute top-4 right-4 text-primary">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>


                            {/* <div *ngIf="hasOptions && canOpenOptions"
                                className="absolute top-14 z-10 w-full text-black font-bold outline-none dark:bg-gray-dark max-h-60 overflow-auto">
                                <ul className="py-1">
                                    <li *ngFor="let option of filteredOptions" (click)="selectOption(option)"
                                        className="px-4 py-2 mb-1 rounded-2xl text-left cursor-pointer bg-white text-black hover:text-primary">
                                        <div className="flex justify-between ">
                                            <span className="font-bold min-w-[150px]">{{option.code_exchange}}</span>
                                            <span
                                                className="font-thin whitespace-nowrap text-clip overflow-hidden">{{option.name}}</span>
                                        </div>
                                        <div className="flex justify-between ">
                                            <div className="font-thin text-sm"></div>
                                            <span className="font-thin italic text-sm">{{option.exchange_name}}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <Link href='/get-estimate'>
                        <button className="btn mx-auto mt-4 block w-fit  mr-auto ml-auto bg-primary text-white rounded-full"
                            >GET A QUOTE TODAY</button>
                        </Link>
                    </div>
  );
}

export default SearchBar;
