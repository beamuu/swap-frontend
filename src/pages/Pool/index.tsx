import { web3 } from "../../wallet/providers/web3";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 300px;  
    background-color: #c3d2de;
    padding: 10px;
    border-radius: 10px;
`
const PoolName = styled.div`
    width: 100%;
    height: 100px;
    background: rgb(81,114,128);
    background: linear-gradient(162deg, rgba(81,114,128,1) 0%, rgba(0,117,233,1) 100%);
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px;
`

const TokenContainer = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    padding: 30px;
`

export default function Pool() {

    return (
        <Container>
            <PoolName>
                <div>
                    <h3 className="m-0" style={{ fontWeight: 500, color: "#fff" }}>Liquidity pool</h3>
                    <p className="m-0 mt-2" style={{ fontWeight: 400, color: "#fff" }}>A pool for swapping tokens.</p>
                </div>

            </PoolName>
            <div className="row m-0 p-0 full-height">
                <div className="col p-0 pe-1 full-height">
                    <TokenContainer 
                        style={{
                            background: "rgb(94,3,191) linear-gradient(132deg, rgba(94,3,191,1) 14%, rgba(255,93,194,1) 100%)",
                        }}
                    >
                        <h3>Token1</h3>

                    </TokenContainer>
                </div>
                <div className="col p-0 ps-1 full-height">
                    <TokenContainer
                        style={{
                            background: "rgb(255,93,194) linear-gradient(132deg, rgba(255,93,194,1) 0%, rgba(208,27,82,1) 49%, rgba(191,3,41,1) 100%)",
                        }}
                    >
                        <h3>Token2</h3>

                    </TokenContainer>
                </div>
            </div>
        </Container>
    )
}