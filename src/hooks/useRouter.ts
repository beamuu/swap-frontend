import { AbiItem } from 'web3-utils';
import { web3 } from "../wallet/providers/web3";
import routerData from "../utils/abi/PancakeRouter01.json";
import { routerAddress } from '../utils/addresses';
import { toWei } from '../utils/convert';
import { useWeb3React } from '@web3-react/core';
import { metamaskTransaction } from './useTransaction';
import { approve } from './useToken';

declare let window: any;

export default function useRouter() {

    const { account } = useWeb3React();
    const Router = new web3.eth.Contract(routerData.abi as AbiItem[], routerAddress);

    const addLiquidity = (
        token0Address: string,
        token1Address: string,
        amount0: string,
        amount1: string,
        min0: string,
        min1: string,
        to: string | null | undefined,
    ) => {
        const data = Router.methods.addLiquidity(
            token0Address,
            token1Address,
            toWei(amount0),
            toWei(amount1),
            toWei(min0),
            toWei(min1),
            to,
            Math.floor(Date.now() / 1000) + 60 * 10,
        ).encodeABI();

        const txParams = {
            from: to,
            to: routerAddress,
            data: data
        }

        window.ethereum.request({
            method: "eth_sendTransaction",
            params: [txParams]
        })
        .then((txhash: any) => console.log(txhash))
        .catch((err: any) => console.log(err))
    }

    const swapTokenToToken = (
        amountIn: string,
        amountOutMin: string,
        path: string[],
        to: string | null | undefined,
    ) => {
        const data = Router.methods.swapTokensForExactTokens(
            toWei(amountIn),
            toWei(amountOutMin),
            path,
            to,
            Math.floor(Date.now() / 1000) + 60 * 10
        ).encodeABI();
        approve(path[0], account, routerAddress, toWei(amountIn));
        metamaskTransaction(account, routerAddress, data);
    }

    const getAmountOut = async (
        amountIn: string,
        path: string[],
    ) => {
        return await Router.methods.getAmountsOut(
            toWei(amountIn),
            path
        ).call();
    }

    return {
        Router,
        addLiquidity,
        swapTokenToToken,
        getAmountOut,
    };
}