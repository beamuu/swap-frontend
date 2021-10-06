import { useWeb3React } from "@web3-react/core";
import { Button } from "../../components/Button";
import useToken from "../../hooks/useToken";
import { useMetamaskTransaction } from "../../hooks/useTransaction";
import { routerAddress, token1Address, token2Address } from "../../utils/addresses";
import { toWei } from "../../utils/convert";

declare let window: any;

export default function DevTools() {

    const Token1 = useToken(token1Address);
    const Token2 = useToken(token2Address);
    const { account } = useWeb3React();

    async function getBalanceOfToken1(address: string | null | undefined) {
        return alert(await Token1.methods.balanceOf(address).call());
    }
    async function getBalanceOfToken2(address: string | null | undefined) {
        return alert(await Token2.methods.balanceOf(address).call());
    }
    async function approveToken1ForRouter() {
        const encodedABI = Token1.methods.approve(routerAddress, toWei("100")).encodeABI();
        const txParams = {
            from: account,
            to: token1Address,
            data: encodedABI,
            value: "0"
        }
        window.ethereum.request({
            method: "eth_sendTransaction",
            params: [txParams]
        })
    }
    async function mintToken1() {
        const encodedABI = Token1.methods.faucet(toWei("10")).encodeABI();
        const txhash = await useMetamaskTransaction(account,token1Address,encodedABI,"");
        return alert(`minted 100 TK1, transaction hash is ${txhash}`);
    }
    async function mintToken2() {
        const encodedABI = Token1.methods.faucet(toWei("10")).encodeABI();
        const txhash = await useMetamaskTransaction(account,token1Address,encodedABI,"");
        return alert(`minted 100 TK1, transaction hash is ${txhash}`);
    }

    return (
        <div>
            <h3 className="mb-5">Dev tools</h3>
            <h5>Tokens</h5>
            <hr />
            <div className="mb-5">
                <Button onClick={() => getBalanceOfToken1(account)}>balanceOf TK1</Button>
                <Button onClick={() => getBalanceOfToken2(account)}>balanceOf TK2</Button>
                <Button onClick={() => approveToken1ForRouter()}>allowance TK1 {"(owner => router)"}</Button>
                <Button>allowance TK2 {"(owner => router)"}</Button>
                <Button onClick={() => mintToken1()}>mint TK1</Button>
                <Button onClick={() => mintToken2()}>mint TK2</Button>
                <Button>approve TK1 (router)</Button>
                <Button>approve TK2 (router)</Button>
            </div>
            <h5>Factory</h5>
            <hr />
            <div className="mb-5">
                <Button>init hash code</Button>
            </div>

        </div>
    )
}