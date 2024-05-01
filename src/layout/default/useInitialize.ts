import { logoutApi } from "@/apis/users";
import useAuthStore from "@/store/useAuthStore";
import { useEffect } from "react";
import { useAccount, useConfig } from "wagmi";

export default function useInitialize() {
  const config = useConfig();
  const token_pair = useAuthStore((state) => state.token_pair);
  const logout = useAuthStore((state) => state.logout);
  const refetchWalletBalance = useAuthStore(
    (state) => state.refetchWalletBalance
  );

  const { isConnected } = useAccount({
    onDisconnect: async () => {
      // console.log("---Disconnected");
      logout();
    },
  });

  useEffect(() => {
    handleAutoConnect();
  }, [token_pair]);

  const handleAutoConnect = async () => {
    // console.log("token_pair?.access ", token_pair?.access);
    // console.log("isConnected", isConnected);

    if (token_pair?.access && !isConnected) {
      const result = await config.autoConnect();
      if (!result) {
        logout();
      } else {
        refetchWalletBalance();
      }
    }
  };
}
