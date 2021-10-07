import { web3 } from "../wallet/providers/web3";
import { AbiItem } from 'web3-utils';
import { abi } from "../utils/abi/Token1.json";
import { toWei } from "../utils/convert";
import { metamaskTransaction } from "./useTransaction";
import { useWeb3React } from "@web3-react/core";

const Token = new web3.eth.Contract(abi as AbiItem[]);

export default function useToken(tokenAddress: string) {
    const Token = new web3.eth.Contract(abi as AbiItem[], tokenAddress);
    const { account } = useWeb3React();

    const approve = (targetAddress: string, amount: string) => {
        const data = Token.methods.approve(targetAddress, toWei(amount)).encodeABI();
        metamaskTransaction(account, tokenAddress, data);
    }
    const balanceOf = async () => {
        return await Token.methods.balanceOf(account).call();
    }
     
    return {
        Token,
        approve,
        balanceOf
    };
}

export const approve = (token: string, me: string | null | undefined, target: string, amount: string) => {
    const data = Token.methods.approve(target, toWei(amount)).encodeABI();
    metamaskTransaction(me, token, data);
}