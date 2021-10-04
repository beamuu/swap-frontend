import { useWeb3React } from "@web3-react/core";
import { Button } from "../../components/Button";
import useToken from "../../hooks/useToken";
import { token1Address, token2Address } from "../../utils/addresses";

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

    return (
        <div>
            <h3 className="mb-5">Dev tools</h3>
            <h5>Tokens</h5>
            <hr />
            <div className="mb-5">
                <Button onClick={() => getBalanceOfToken1(account)}>balanceOf TK1</Button>
                <Button onClick={() => getBalanceOfToken2(account)}>balanceOf TK2</Button>
                <Button>allowance TK1 {"(owner => router)"}</Button>
                <Button>allowance TK2 {"(owner => router)"}</Button>
                <Button>mint TK1</Button>
                <Button>mint TK2</Button>
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