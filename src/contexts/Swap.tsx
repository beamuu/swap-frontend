import { createContext, useState } from "react";

const defaultContextValue = {
    token1: "",
    token2: "",
    token1Amount: 0,
    token2Amount: 0,
}

export interface ISwapContext {
    token1: string,
    token2: string,
    token1Amount: number,
    token2Amount: number,
}

export const SwapContext = createContext<ISwapContext>(defaultContextValue);


export function SwapProvider({ children }: { children: any }) {
    const [token1, setToken1] = useState("");
    const [token2, setToken2] = useState("");
    const [token1Amount, setToken1Amount] = useState(0);
    const [token2Amount, setToken2Amount] = useState(0);
    return (
        <SwapContext.Provider value={{
            token1,
            token2,
            token1Amount,
            token2Amount
        }}>
            {children}
        </SwapContext.Provider>
    )
}

