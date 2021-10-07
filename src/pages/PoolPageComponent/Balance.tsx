import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react";
import { LoadingCenter } from "../../components/Loading";
import usePair from "../../hooks/usePair";
import useToken from "../../hooks/useToken";
import { fromWei } from "../../utils/convert";

interface IBalance {
    address0: string;
    address1: string;
    symbol0: string;
    symbol1: string;
}

export default function Balance({ address0, address1, symbol0, symbol1 }: IBalance) {

    console.log(address0, address1);
    const { lpToken } = usePair(symbol0, symbol1);
    const { balanceOf: balanceOf0 } = useToken(address0);
    const { balanceOf: balanceOf1 } = useToken(address1);
    const [balance0, setBalance0] = useState("");
    const [balance1, setBalance1] = useState("");

    const init = async () => {
        const a = await balanceOf0();
        const b = await balanceOf1();
        setBalance0(a);
        setBalance1(b);
    }
    useEffect(() => {
        init();
    }, [])
    return (
        <div className="p-3">
            <h3 className="mb-4">Your token balances</h3>
            {
                (balance0 && balance1 && lpToken) ?
                    (
                        <div>
                            <p>{balance0 ? `${fromWei(balance0)} ${symbol0}` : "Getting number"}</p>
                            <p>{balance1 ? `${fromWei(balance1)} ${symbol1}` : "Getting number"}</p>
                            <p>{lpToken ? `${fromWei(lpToken)} Token(s)` : "Getting number"}</p>
                        </div>
                    ) :
                    <LoadingCenter />
            }
        </div>
    )
}