import { Box } from "@mui/material";
import HomeHero from "./home-hero";
import HomeStats from "./home-stats";
import HomeTrade from "./home-trade";
import HomeEarn from "./home-earn";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <HomeHero />
      <HomeStats />
      <HomeTrade />
      <HomeEarn />
    </Box>
  );
}
