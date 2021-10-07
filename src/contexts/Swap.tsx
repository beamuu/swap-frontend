import { createContext, useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import { Tokens } from "../utils/addresses";
import { fromWei } from "../utils/convert";

const initContextValue = {
    token1: "TK1",
    token2: "",
    token1Amount: 0,
    token2Amount: 0,
    setToken1: () => { },
    setToken2: () => { },
    setToken1Amount: () => { },
    setToken2Amount: () => { },
    output: "",
    calculated: false
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
    output: string;
    calculated: boolean;
}

export const SwapContext = createContext<ISwapContext>(initContextValue);


export function SwapProvider({ children }: { children: any }) {
    const [token1, setToken1] = useState<string>("TK1");
    const [token2, setToken2] = useState<string>("");
    const [token1Amount, setToken1Amount] = useState<number>(0);
    const [token2Amount, setToken2Amount] = useState<number>(0);
    const [output, setOutput] = useState<string>("");
    const [calculated, setCalculated] = useState(false);
    const { getAmountOut } = useRouter();

    // console.log(token1, token2);

    const handleCalculateOutput = async () => {
        const a = await getAmountOut(
            token1Amount.toString(),
            [Tokens[token1].address, Tokens[token2].address]
        )
        setOutput(fromWei(a[1]));
        setToken2Amount(parseFloat(fromWei(a[1])));

    }

    useEffect(() => {
        // console.log(token1, token1Amount, token2);
        if (token1 && token2 && token1Amount) {
            handleCalculateOutput();
            setCalculated(true)
        }
        else {
            setCalculated(false);
        }
    }, [token1, token1Amount, token2])

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
            output,
            calculated
        }}>
            {children}
        </SwapContext.Provider>
    )
}

