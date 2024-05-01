import EmotionProvider from "./emotion-provider";
import { EmotionCache } from "@emotion/react";
import WagmiProvider from "./wagmi-provider";
import ProgressProvider from "./progress-provider";
import ScrollToTopProvider from "./scroll-to-top-provider";

interface ProvidersProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

export default function Providers({ children, emotionCache }: ProvidersProps) {
  return (
    <>
      <ProgressProvider />
      <WagmiProvider>
        <EmotionProvider emotionCache={emotionCache}>
          <ScrollToTopProvider />
          {children}
        </EmotionProvider>
      </WagmiProvider>
    </>
  );
}
