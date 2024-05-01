import React, { useState } from 'react'
import SwapForm from '../swap/swap-box/swap-form';
import SwapChart from '../swap/swap-chart';


const Limit = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [chart, setChart] = useState<boolean>(false);

    return (
        <div className='md:flex w-[98.9%] h-full overflow-hidden flex justify-evenly py-10 ml-4 mr-24 bg-[#f0f8ff]'>
            <div className="wraper flex flex-col gap-10">

                {chart && (
                    <div>
                        <SwapChart />
                    </div>
                )}
                <div className="bg-gray-100 rounded-lg shadow-md mx-auto p-4 h-max">
                    <div className="flex justify-between">
                        <div className="flex space-x-2">
                            <button
                                className={`rounded-bl-0 rounded-br-0 shadow-none flex-1 relative items-center border-0 rounded-lg cursor-pointer inline-flex font-inherit md:text-base font-semibold justify-center tracking-wide leading-none opacity-100 outline-none transition duration-200 ease-in-out h-12 md:px-6 text-xs  ${activeTab === 1 ? '' : 'bg-gray-400'}`}
                                onClick={() => setActiveTab(1)}
                            >
                                Open Orders
                            </button>
                            <button
                                className={`rounded-bl-0 rounded-br-0 shadow-none flex-1 relative items-center border-0 rounded-lg cursor-pointer inline-flex font-inherit md:text-base font-semibold justify-center tracking-wide leading-none opacity-100 outline-none transition duration-200 ease-in-out h-12 md:px-6 text-xs  ${activeTab === 2 ? '' : 'bg-gray-400'}`}
                                onClick={() => setActiveTab(2)}
                            >
                                Expired Orders
                            </button>
                            <button
                                className={`rounded-bl-0 rounded-br-0 shadow-none flex-1 relative items-center border-0 rounded-lg cursor-pointer inline-flex font-inherit md:text-base font-semibold justify-center tracking-wide leading-none opacity-100 outline-none transition duration-200 ease-in-out h-12 md:px-6 text-xs  ${activeTab === 3 ? '' : 'bg-gray-400'}`}
                                onClick={() => setActiveTab(3)}
                            >
                                Order History
                            </button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-2 py-1 text-left">From</th>
                                    <th className="px-2 py-1 text-left">To</th>
                                    <th className="px-2 py-1 text-left">Limit Price</th>
                                    <th className="px-2 py-1 text-left">Status</th>
                                    <th className="px-2 py-1"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add rows here to display your order data */}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="text-gray-500">{activeTab === 1 ? "No Open Orders" : activeTab == 2 ? "No Expired Orders" : "No Order History"}</div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <div></div>
                        <div className="text-gray-500">Page 1 of 1</div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white w-2/6 md:w-3/12 border border-gray-200 rounded-lg p-4 h-max">
                <div className="w-full mx-auto p-4">
                    <div className="flex items-center justify-between mb-4">
                        <button className="p-2 rounded-md focus:outline-none" onClick={() => setChart(!chart)}>
                            {chart ? (
                                <svg viewBox="0 0 23 22" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 1l-20 20" stroke-width="2" stroke="currentColor" stroke-linecap="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.033 19H19.5a1 1 0 100-2H9.033l-2 2zm3-3H18.5a1 1 0 001-1V6.533l-2 2V14h-2v-3.467l-2 2V14h-1.467l-2 2zm.936-8H10.5a1 1 0 00-1 1v.469L10.969 8zm-2 2L5.5 13.469V11a1 1 0 011-1h2.469zM4.5 14.469l-2 2V6a1 1 0 012 0v8.469z"></path></svg>
                            ) :
                                (
                                    <svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path>
                                        <path d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path>
                                    </svg>
                                )}
                        </button>
                        <h2 className="text-xl font-bold">Limit</h2>
                        <button className="p-2 rounded-md focus:outline-none">
                            <svg viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="text-sm text-gray-600">Place a limit order to trade at a set price</div>
                </div>
                <SwapForm />
                <div className="flex justify-center mt-4">
                    <a
                        className="flex items-center"
                        href="https://www.gelato.network/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="w-16 h-4 mr-2"
                            src="https://pancakeswap.finance/images/powered_by_gelato_black.svg"
                            alt="Powered by Gelato"
                        />
                        <span className="text-gray-500 text-sm">Powered by Gelato</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Limit

