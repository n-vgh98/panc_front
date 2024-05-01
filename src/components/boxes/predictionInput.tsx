import React from 'react'
import ConnectWallet from '../connect-wallet'
import useAuthStore from '@/store/useAuthStore';

const PredictionInput = ({ setPreUpDown }: { setPreUpDown: React.Dispatch<React.SetStateAction<string>> }) => {

    const user = useAuthStore((state) => state.user);

    return (
        <div className={`rounded-lg shadow-md px-2 flex flex-col items-center gap-8 md:w-3/12 lg:w-6/12 ${status === "expired" ? "bg-[#e7e3eb] opacity-70" : "bg-gray-50"}`}>
            <div className="flex items-center flex-col">
                <div className="flex self-start m-1" onClick={() => setPreUpDown("none")}>
                    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z"></path></svg>
                    <span>go back</span>
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-4">
                        <div className="font-bold mb-2">Commit:</div>
                        <div className="flex items-center">
                            <div className="mr-2">
                                <img src="https://tokens.pancakeswap.finance/images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png" className="w-10 h-10" alt="BNB Icon" />
                            </div>
                            <div>BNB</div>
                        </div>
                        <div className="mt-2">
                            <input pattern="^[0-9]*[.,]?[0-9]{0,18}$" inputMode="decimal" min="0" placeholder="0.0" disabled className="w-full bg-gray-100 p-2 rounded" value="" />
                        </div>
                        <div className="mt-2">
                            <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                                <input name="balance" type="range" min="0" max="100" step="0.01" disabled className="w-full h-full bg-gradient-to-r from-blue-500 to-blue-700" value="0" />
                            </div>
                        </div>
                        <div className="mt-2 flex justify-between gap-1">
                            <button disabled className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">10%</button>
                            <button disabled className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">25%</button>
                            <button disabled className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">50%</button>
                            <button disabled className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">75%</button>
                            <button disabled className="bg-gray-400 hover:bg-gray-500 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">Max</button>
                        </div>
                        <div className="mt-4">
                            {!user ?(
                                <ConnectWallet sx={{ backgroundColor: "#4f46e5", borderRadius: "4px", width: "100%" }} />

                            ) : (
                            <button className="w-full mt-4 rounded-md bg-indigo-600 py-2 text-center text-white font-bold focus:outline-none hover:bg-indigo-700">
                                Confirm
                            </button>
                            )}
                        </div>
                        <p className="mt-4 text-gray-500 text-sm">You won’t be able to remove or change your position once you enter it.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictionInput