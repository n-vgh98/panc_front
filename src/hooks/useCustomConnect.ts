import { verifyLoginApi } from "@/apis/users";
import { useCallback } from "react";
import { useConnect } from "wagmi";

export const tokenLocalStorageKey = "access_token";
export const refreshTokenLocalStorageKey = "refresh_token";
export const userLocalStorageKey = "user";

export default function useCustomConnect() {
  const { connect, connectAsync, connectors } = useConnect();

  const connectWallet = useCallback(async (wallet) => {
    const connector = connectors.find((c) => c.id === wallet.connectorId);

    // connect({ connector });

    try {
      const conInfo = await connectAsync({ connector });

      const res = await verifyLoginApi({ address: conInfo.account });
      localStorage.setItem(tokenLocalStorageKey, res.data.token_pair.access);
      localStorage.setItem(
        refreshTokenLocalStorageKey,
        res.data.token_pair.refresh
      );
      localStorage.setItem(userLocalStorageKey, JSON.stringify(res.data.user));

      window.dispatchEvent(new Event("storage"));
    } catch (error) {}
  }, []);

  return { connectWallet };
}
