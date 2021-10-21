import { web3 } from "../wallet/providers/web3";
import { AbiItem } from 'web3-utils';
import { abi } from "../utils/abi/Token1.json";
import { fromWei, toWei } from "../utils/convert";
import { metamaskTransaction } from "./useTransaction";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

const Token = new web3.eth.Contract(abi as AbiItem[]);

export default function useToken(tokenAddress: string) {

    const [balance, setBalance] = useState("");
    const Token = new web3.eth.Contract(abi as AbiItem[], tokenAddress);
    const { account } = useWeb3React();

    const approve = async (targetAddress: string, amount: string) => {
        const data = Token.methods.approve(targetAddress, toWei(amount)).encodeABI();
        return await metamaskTransaction(account, tokenAddress, data, "0");
    }
    const balanceOf = async () => {
        return await Token.methods.balanceOf(account).call();
    }

    useEffect(() => {
        const initBalance = async () => {
            setBalance(fromWei(await balanceOf()));
        }
        if (tokenAddress) {
            initBalance();
        }
    }, [tokenAddress])
     
    return {
        Token,
        approve,
        balanceOf,
        balance
    };
}

export const approve = (token: string, me: string | null | undefined, target: string, amount: string) => {
    const data = Token.methods.approve(target, toWei(amount)).encodeABI();
    metamaskTransaction(me, token, data, "0");
}