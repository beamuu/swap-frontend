import { web3 } from "../../wallet/providers/web3";
import styled from "styled-components";
import PoolContainer from "./PoolContainer";
import PoolIcon from "./PoolIcon";
export default function Pool() {

    return (
        <div className="">
            <h3>Liquidity pools</h3>
            <div className="mt-3 d-flex flex-wrap">
                <PoolIcon 
                    token1="TK1" 
                    token2="TK2"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    />

            </div>
        </div>
    )
}