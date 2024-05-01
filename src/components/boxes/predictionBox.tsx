import React from "react";
import PredictionInput from "./predictionInput";

// Define SVG icons

interface BoxProps {
    status: string;
    color: string;
    preUpDown?: string,
    setPreUpDown?: React.Dispatch<React.SetStateAction<string>>,
    payoutUp?: number;
    payoutDown?: number;
    lastPrice?: number;
    lockedPrice?: number;
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
    status,
    color,
    preUpDown,
    setPreUpDown,
    payoutUp,
    payoutDown,
    lastPrice,
    lockedPrice,
    children
}) => {


    if (preUpDown === "up" && setPreUpDown) {
        return (
            <PredictionInput setPreUpDown={setPreUpDown} />
        );
    }
    else if (preUpDown === "down" && setPreUpDown) {
        return (
            <PredictionInput setPreUpDown={setPreUpDown} />
        );
    }

    return (
        <div className={`rounded-lg shadow-md px-2 flex flex-col items-center gap-8 w-max  ${status === "expired" ? "bg-[#e7e3eb] opacity-70" : "bg-gray-50"}`}>
            <div className="flex items-center">

                {status === "expired" ? (
                    <svg viewBox="0 0 24 24" width="21px" color="textDisabled" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"></path></svg>
                ) : status !== "Later" ? (
                    <svg
                        viewBox="0 0 24 24"
                        width="24px"
                        color={color}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                    </svg>)
                    : (
                        <svg viewBox="0 0 24 24" width="21px" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z"></path></svg>
                    )}
                <div className="ml-2 text-lg font-bold">{status}</div>
            </div>
            <div className="content flex flex-col items-center">

                <div className='relative'>
                    <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" className={` ${lastPrice && lockedPrice && lastPrice > lockedPrice ? "text-green-500" : "text-indigo-100"}`}><g filter="url(#filter0_i)"><path d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z" fill="var(--colors-success)"></path></g><defs><filter id="filter0_i" x="10.0001" y="1.03125" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                    <span className={`absolute top-5 right-[45%] ${lastPrice && lockedPrice ? lastPrice < lockedPrice ? "text-green-500" : "text-white" : payoutUp ? "text-green-500" : "text-[#bdc2c4]"}`}>UP</span>
                    {payoutUp && (
                        <span className={`absolute top-10 right-[35%] text-xs ${lastPrice && lockedPrice ? lastPrice < lockedPrice ? "text-black" : "text-white" : "text-black"}`}>{payoutUp}x <strong className="font-light">Payout</strong> </span>
                    )}
                </div>
                <div className={`flex flex-col w-full h-36 py-10 text-nowrap items-center justify-center border-2 rounded-md ${lastPrice && lockedPrice ? lastPrice > lockedPrice ? "border-green-500" : "border-red-500" : "border-indigo-400"}`}>
                    {children}
                </div>
                <div className='relative mb-8'>
                    <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg" className={`${lastPrice && lockedPrice && lastPrice < lockedPrice ? "text-red-500" : "text-indigo-100"}`}><g filter="url(#filter0_i)"><path d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z" fill="var(--colors-failure)"></path></g><defs><filter id="filter0_i" x="10.0001" y="1" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                    {payoutDown && (
                        <span className={`absolute top-5 right-[35%] text-xs ${lastPrice && lockedPrice ? lastPrice > lockedPrice ? "text-black" : "text-white" : "text-black"}`}>{payoutDown}x <strong className="font-light">Payout</strong> </span>
                    )}
                    <span className={`absolute top-8 right-[40%] ${lastPrice && lockedPrice ? lastPrice > lockedPrice ? "text-green-500" : "text-white" : payoutUp ? "text-red-500" : "text-[#bdc2c4]"}`}>DOWN</span>
                </div>
            </div>
        </div>
    );
};

export default Box;
