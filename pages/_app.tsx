import { AppProps } from "next/app";
import Providers from "@/components/providers";
import "@/assets/styles/global.css";
import DefaultLayout from "@/layout/default";
import { EmotionCache } from "@emotion/react";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import "../src/styles/global.css"

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp({
  Component,
  emotionCache,
  pageProps,
}: MyAppProps) {
  return (
    <>
      <Head>
        <title>PancakeSwap</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Providers emotionCache={emotionCache}>
        <ToastContainer theme="colored" />
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Providers>
    </>
  );
}
