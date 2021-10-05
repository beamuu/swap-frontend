import { createContext, useState } from "react";

const initContextValue = {
    token1: "TK1",
    token2: "",
    token1Amount: 0,
    token2Amount: 0,
    setToken1: () => {},
    setToken2: () => {},
    setToken1Amount: () => {},
    setToken2Amount: () => {},
}
export interface ISwapContext {
    token1: string;
    token2: string;
    token1Amount: number;
    token2Amount: number;
    setToken1: React.Dispatch<React.SetStateAction<string>> | (() => void);
    setToken2: React.Dispatch<React.SetStateAction<string>> | (() => void);
    setToken1Amount: React.Dispatch<React.SetStateAction<number>> | (() => void);
    setToken2Amount: React.Dispatch<React.SetStateAction<number>> | (() => void);
}

export const SwapContext = createContext<ISwapContext>(initContextValue);


export function SwapProvider({ children }: { children: any }) {
    const [token1, setToken1] = useState<string>("TK1");
    const [token2, setToken2] = useState<string>("");
    const [token1Amount, setToken1Amount] = useState<number>(0);
    const [token2Amount, setToken2Amount] = useState<number>(0);
    console.log(token1,token2);
    return (
        <SwapContext.Provider value={{
            token1,
            token2,
            token1Amount,
            token2Amount,
            setToken1,
            setToken2,
            setToken1Amount,
            setToken2Amount,
        }}>
            {children}
        </SwapContext.Provider>
    )
}

