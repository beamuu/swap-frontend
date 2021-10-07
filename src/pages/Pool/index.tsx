import { web3 } from "../../wallet/providers/web3";
import styled from "styled-components";
import PoolContainer from "./PoolContainer";
import PoolIcon from "./PoolIcon";
import { useHistory } from "react-router";
export default function Pool() {

    const history = useHistory();
    return (
        <div className="">
            <h5>Liquidity pools</h5>
            <div className="mt-3 d-flex flex-wrap">
                <PoolIcon 
                    token1="TK1" 
                    token2="TK2"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/TK1-TK2")}
                    
                    />
                <PoolIcon 
                    token1="KTD" 
                    token2="LEMON"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/KTD-LEMON")}
                    
                    />
                <PoolIcon 
                    token1="TIG" 
                    token2="LEMON"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/TIG-LEMON")}
                    
                    />
                <PoolIcon 
                    token1="KTD" 
                    token2="GG"
                    address="0x27835abf87e682d187e871871fA98764" // MOCK
                    abi={[]}
                    onClick={() => history.push("/pool/KTD-GG")}
                    
                    />

            </div>
        </div>
    )
}