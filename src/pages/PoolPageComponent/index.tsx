import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { DefaultBlackButton } from "../../components/Button";
import useFactory from "../../hooks/useFactory";
import usePair from "../../hooks/usePair";
import useRouter from "../../hooks/useRouter";
import useToken from "../../hooks/useToken";
import { routerAddress, Tokens } from "../../utils/addresses";
import { fromWei } from "../../utils/convert";
import Balance from "./Balance";
import PoolHeader from "./PoolHeader";
import Reserve from "./Reserve";


interface IParams {
    pair: string;
}

export default function PoolPageComponent() {

    const Factory = useFactory();
    const { account } = useWeb3React();
    const { pair }: IParams = useParams();
    const [token1, token2] = pair.split("-");
    const { pairAddress, reserve0, reserve1 } = usePair(token1, token2);
    const { addLiquidity } = useRouter();
    const { approve: approveToken1 } = useToken(Tokens[token1].address);
    const { approve: approveToken2 } = useToken(Tokens[token2].address);
    const [amount0, setAmount0] = useState("");
    const [amount1, setAmount1] = useState("");
    const [min0, setMin0] = useState("");
    const [min1, setMin1] = useState("");
    const history = useHistory();

    // for init pairAddress

    const handleAmount0 = (e: any) => {
        try {
            const a = parseFloat(e.target.value);
            setAmount0(e.target.value);
        } catch (error) {
            //
        }
    }
    const handleAmount1 = (e: any) => {
        try {
            const a = parseFloat(e.target.value);
            setAmount1(e.target.value);
        } catch (error) {
            //
        }
    }
    const handleMin0 = (e: any) => {
        try {
            const a = parseFloat(e.target.value);
            setMin0(e.target.value);
        } catch (error) {
            //
        }
    }
    const handleMin1 = (e: any) => {
        try {
            const a = parseFloat(e.target.value);
            setMin1(e.target.value);
        } catch (error) {
            //
        }
    }

    const handleAddLiquidity = () => {
        approveToken1(routerAddress, amount0);
        approveToken2(routerAddress, amount1);
        addLiquidity(
            Tokens[token1].address,
            Tokens[token2].address,
            amount0,
            amount1,
            min0,
            min1,
            account
        )
    }




    if (pairAddress === "") {
        return null;
    }
    if (pairAddress === null) {
        return (
            <h4>No pool available</h4>
        )
    }
    return (
        <>
            <DefaultBlackButton className="mt-5" onClick={() => history.push("/app")}>{"<"} Back to app</DefaultBlackButton>
            <div className="my-5"
                style={{
                    backgroundColor: "rgba(255,255,255,0.70)",
                    borderRadius: "20px",
                    minHeight: "600px",
                    padding: "20px",
                }}
            >
                <PoolHeader name={`${token1}-${token2}`} address={pairAddress} />
                {/* <h3>Pool {token1}-{token2}</h3>
            <p>pool address: {pairAddress}</p> */}
                <h5 className="mt-5">Reserves</h5>
                <div className="row m-0 p-0">
                    <Reserve
                        className="col-lg mx-2"
                        name={Tokens[token1].name}
                        value={reserve0 ? fromWei(reserve0) : "Getting number..."}
                        symbol={token1}
                        ratio={parseFloat(reserve0) / (parseFloat(reserve0) + parseFloat(reserve1))}
                        theme={1}
                    // ratio={0.4}
                    />

                    <Reserve
                        className="col-lg mx-2"
                        name={Tokens[token2].name}
                        value={reserve1 ? fromWei(reserve1) : "Getting number..."}
                        symbol={token2}
                        ratio={parseFloat(reserve1) / (parseFloat(reserve0) + parseFloat(reserve1))}
                        theme={2}
                    // ratio={0.6}
                    />

                </div>

                <div className="my-3">
                    <div className="row">
                        <div className="col-lg mx-2 p-3" style={{ backgroundColor: "#fff", borderRadius: "20px", minHeight: "200px" }}>
                            <div className="p-3">
                                <h3 className="mb-4">Liquidity</h3>
                                <div className="row">
                                    <div className="col">
                                        <b>{Tokens[token1].name}</b>
                                    </div>
                                    <div className="col">
                                        <input className="mx-2" onChange={handleAmount0} /><span>{token1}</span><br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <b>{Tokens[token2].name}</b>
                                    </div>
                                    <div className="col">
                                        <input className="mx-2" onChange={handleAmount1} /><span>{token2}</span><br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <b>Minimum {Tokens[token1].name}</b>
                                    </div>
                                    <div className="col">
                                        <input className="mx-2" onChange={handleMin0} /><span>{token1}</span><br />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <b>Minimum {Tokens[token2].name}</b>
                                    </div>
                                    <div className="col">
                                        <input className="mx-2" onChange={handleMin1} /><span>{token2}</span><br />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <DefaultBlackButton
                                        className="mt-3"
                                        onClick={handleAddLiquidity}
                                    >Add Liquidity</DefaultBlackButton>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg mx-2 p-3" style={{ backgroundColor: "#fff", borderRadius: "20px", minHeight: "200px" }}>
                            <Balance
                                address0={Tokens[token1].address}
                                address1={Tokens[token2].address}
                                symbol0={token1}
                                symbol1={token2}
                            />
                        </div>
                    </div>
                    {/* <Button>Add liquidity</Button> */}

                </div>



            </div>
        </>
    )
}