import { useEffect, useState } from "react";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { connect, disconnect } from "@wagmi/core";
import {
  logoutApi,
  refreshTokenApi,
  verifyLoginApi,
  walletBalanceApi,
} from "@/apis/users";

interface AuthStore {
  token_pair: any;
  user: any;
  login: (wallet, connectors) => Promise<void>;
  logout: (callApi?: boolean) => Promise<void>;
  refresh: () => Promise<void>;
  refetchWalletBalance: () => Promise<void>;
}

const initialState = {
  token_pair: null,
  user: null,
  login: async (formData) => {},
  logout: () => {},
  refresh: async () => {},
  refetchWalletBalance: async () => {},
};

const store = (set, get) => ({
  ...initialState,

  login: async (wallet, connectors) => {
    const connector = connectors.find((c) => c.id === wallet.connectorId);

    const conInfo = await connect({ connector });

    try {
      const res = await verifyLoginApi({ address: conInfo.account });
      set({ token_pair: res.data?.token_pair, user: res.data?.user });
    } catch (error) {
      set({ token_pair: null, user: null });
    }
  },

  logout: async (callApi = true) => {
    const token_pair = get().token_pair;

    set({ token_pair: null, user: null });

    await disconnect();

    if (callApi && token_pair?.refresh) {
      try {
        await logoutApi(token_pair.access, { refresh: token_pair.refresh });
      } catch (error) {}
    }
  },

  refresh: async () => {
    const token_pair = get().token_pair;
    try {
      const res = await refreshTokenApi({ refresh: token_pair.refresh });
      set({ token_pair: res.data.token_pair });
    } catch (error) {
      throw error;
    }
  },

  refetchWalletBalance: async () => {
    const user = get().user;
    try {
      const res = await walletBalanceApi();
      set({ user: { ...user, wallet_balance: res.data?.wallet_balance } });
    } catch (error) {}
  },
});

// useRealAuth always has persisted values
export const useRealAuth = create<AuthStore>()(
  devtools(persist(store, { name: "auth" }))
);

// useAuthStore has initialState in first render and real values after that
const useAuthStore = (f) => {
  const [state, setState] = useState(() => f(initialState));

  const zustandState = useRealAuth(f);

  useEffect(() => {
    setState(() => zustandState);
  }, [zustandState]);

  return state;
};

export default useAuthStore;
