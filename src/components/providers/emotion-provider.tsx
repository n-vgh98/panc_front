import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@/lib/theme";
import createEmotionCache from "@/lib/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface EmotionProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

export default function EmotionProvider({
  children,
  emotionCache = clientSideEmotionCache,
}: EmotionProviderProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
