import ArrowDown2Icon from "@/assets/icons/arrow-down-2.svg";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function ScrollToTopProvider() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const listener = () => {
      setShowTopBtn(window.scrollY > 600 ? true : false);
    };
    window.addEventListener("scroll", listener);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showTopBtn && (
      <Button
        variant="contained"
        onClick={() => goToTop()}
        sx={{
          width: 48,
          minWidth: "unset",
          height: 48,
          position: "fixed",
          right: "5%",
          bottom: "calc(110px + env(safe-area-inset-bottom))",
          svg: {
            transform: "rotate(180deg)",
          },
        }}
      >
        <ArrowDown2Icon />
      </Button>
    )
  );
}
