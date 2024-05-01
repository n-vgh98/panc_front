import Box from '@/components/boxes/predictionBox';
import TradingViewWidget from "./chainLinkChart";
import React from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

type Data = {
  lastPrice: number;
  delta: number;
  lockedPrice: number;
  prizePool: number;
  payoutUp: number;
  payoutDown: number;
}

interface Countdown {
  timeRemaining: number;
  alerted: boolean;
  message: string;
}


const CountDown = ({ mode, idx }: { mode: number, idx?: number }) => {
  const [countdowns, setCountdowns] = React.useState<Countdown[]>([
    { timeRemaining: 300, alerted: false, message: "Countdown 1 ended" }, // 5 minutes in seconds
    { timeRemaining: 600, alerted: false, message: "Countdown 2 ended" } // 10 minutes in seconds
  ]);

  // Format time in MM:SS
  const formatTime = (time: number): string => {
    if (time <= 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleCountdownClose = (index: number) => {
    setCountdowns(prevCountdowns => {
      const updatedCountdowns = [...prevCountdowns];
      updatedCountdowns.splice(index, 1);
      return updatedCountdowns;
    });
  };


  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(prevCountdowns => {
        return prevCountdowns.map((countdown) => {
          if (countdown.timeRemaining <= 0 || countdown.alerted) {
            return countdown;
          }
          const updatedCountdown = { ...countdown, timeRemaining: countdown.timeRemaining - 1 };
          if (updatedCountdown.timeRemaining <= 0) {
            updatedCountdown.alerted = true;
          }
          return updatedCountdown;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

      {mode === 1 ? (
        <p className="text-3xl">{formatTime(countdowns[0].timeRemaining) !== "00:00" ? formatTime(countdowns[0].timeRemaining) : formatTime(countdowns[1].timeRemaining)}</p>
      )
        :
        idx && idx == 1 ? (
          <div className="count-down">~{formatTime(countdowns[0].timeRemaining)}</div>
        ) : (<div className="count-down">~{formatTime(countdowns[1].timeRemaining)}</div>)
      }
    </>
  )
}


const Prediction = () => {

  const [data, setData] = React.useState<Data>({
    lastPrice: 5648,
    delta: 0.546545,
    lockedPrice: 5464.5465,
    prizePool: 0.00002,
    payoutUp: 2.22,
    payoutDown: 0.956,
  });

  const { lastPrice, lockedPrice, delta, prizePool, payoutUp, payoutDown } = data;

  const [preUpDown, setPreUpDown] = React.useState<string>("none");
  const [showChart, setShowChart] = React.useState(false);
  const [showChart2, setShowChart2] = React.useState(false);

  return (
    <div className="main mt-8 flex flex-wrap overflow-x-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#8a85de', scrollBehavior: 'smooth' }}>
      <div className='count-down absolute right-40 top-14 hidden md:flex items-center'>
        <svg viewBox="0 0 48 48" color="text" width="40px" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#svg1007)"><path fill-rule="evenodd" clip-rule="evenodd" d="M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z" fill="#FFAF00"></path><path d="M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z" fill="#EB8C00"></path><path d="M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z" fill="#FFAF00"></path><path d="M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z" fill="#FFD800"></path><path d="M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z" fill="#FFE971"></path><path d="M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z" fill="#EB8C00"></path><path d="M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z" fill="#FFD800"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z" fill="#FFE971"></path><path d="M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z" fill="#FFC700"></path><path d="M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z" fill="white"></path><path d="M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z" fill="#E7E8E8"></path><path d="M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z" fill="#E7E8E8"></path><path d="M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z" fill="#452A7A"></path><path d="M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z" fill="#452A7A"></path><path d="M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z" fill="#452A7A"></path><path d="M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z" fill="#EB8C00"></path><path d="M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z" fill="#FFC700"></path><path d="M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z" fill="#FFD800"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z" fill="#FFE971"></path></g><defs><clipPath id="svg1007"><rect width="48" height="48" fill="white" transform="matrix(-1 0 0 1 48 0)"></rect></clipPath></defs></svg>
        <CountDown mode={1} />
      </div>
      <div className='boxes flex gap-8 m-8 justify-center'>

        <Box
          status="expired"
          color="green"
          payoutUp={payoutUp}
          payoutDown={payoutDown}
          lastPrice={lastPrice}
          lockedPrice={lockedPrice}
        >

          <div className="lastPrice flex">
            <span className='mr-1 text-sm'>last price:</span>
            <div className="last-price delta flex gap-8">
              <span className="last-p text-sm">{lastPrice}</span>
              <span className={`flex items-center mx-2 text-xs p-1 rounded-sm md:text-sm text-white ${lastPrice > lockedPrice ? "bg-green-500" : "bg-red-500"}`}>
                {delta > 0 && lastPrice > lockedPrice ? (
                  <svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
                  </svg>
                ) : (
                  delta > 0 && lastPrice < lockedPrice ? (
                    <svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                    </svg>
                  ) : (
                    null
                  )
                )}
                {delta}
              </span>
            </div>
          </div>
          <span className='text-sm mt-4'>locked Price: {lockedPrice}</span>
          <span className='text-sm'>Prize Pool: {prizePool} CAKE</span>
        </Box>
        <Box
          status="LIVE"
          color="green"
          payoutUp={payoutUp}
          payoutDown={payoutDown}
          lastPrice={lastPrice}
          lockedPrice={lockedPrice}
        >

          <div className="lastPrice flex">
            <span className='mr-1 text-sm'>last price:</span>
            <div className="last-price delta flex gap-8">
              <span className="last-p text-sm">{lastPrice}</span>
              <span className={`flex items-center mx-2 text-xs p-1 rounded-sm md:text-sm text-white ${lastPrice > lockedPrice ? "bg-green-500" : "bg-red-500"}`}>
                {delta > 0 && lastPrice > lockedPrice ? (
                  <svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z"></path>
                  </svg>
                ) : (
                  delta > 0 && lastPrice < lockedPrice ? (
                    <svg viewBox="0 0 24 24" color="white" width="20px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path>
                    </svg>
                  ) : (
                    null
                  )
                )}
                {delta}
              </span>
            </div>
          </div>
          <span className='text-sm mt-4'>locked Price: {lockedPrice}</span>
          <span className='text-sm'>Prize Pool: {prizePool} CAKE</span>
        </Box>
        <Box
          status="Next"
          color="blue"
          payoutUp={4.83}
          preUpDown={preUpDown}
          setPreUpDown={setPreUpDown}
          payoutDown={1.46}
        >
          <div >
            <div className='flex gap-8'>
              <div >Prize Pool:</div>
              <div >0.6707 BNB</div>
            </div>
            <div className='flex flex-col gap-4'>
              <button className='h-10 w-full rounded-md bg-green-400' onClick={() => setPreUpDown("up")}>Enter UP</button>
              <button className='h-10 w-full rounded-md bg-red-400' onClick={() => setPreUpDown("down")}>Enter DOWN</button>
            </div>
          </div>
        </Box>

        <Box
          status='Later'
          color='gray'
        >
          <div>
            <div>Entry starts</div>
            <CountDown mode={2} idx={1} />
          </div>
        </Box>

        <Box
          status='Later'
          color='gray'
        >
          <div>
            <div>Entry starts</div>
            <CountDown mode={2} idx={2} />
          </div>
        </Box>

      </div>
      <div className={`flex ml-8 ${showChart && "h-80" || showChart2 && "h-80"}`}>
        <div className=' bg-white pr-1'>

          <button className='rounded-sm'
            onClick={() => {
              setShowChart2(!showChart2)
              setShowChart(false)
            }}
          >
            tradingview Chart
          </button>
        </div>
        <div className='flex bg-white pl-1 border-solid border-l-[1px] border-slate-950'>
          <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
          <button className='rounded-sm mr-2'
            onClick={() => {
              setShowChart(!showChart)
              setShowChart2(false)
            }}
          >
            Chain Chart
          </button>
        </div>

        {showChart && <TradingViewWidget />}
        {/* {showChart2 && <AdvancedRealTimeChart theme="dark" height={2000} autosize></AdvancedRealTimeChart>} */}

      </div>
    </div>
  );
};

export default Prediction;