import { AbiItem } from 'web3-utils';
import { web3 } from "../wallet/providers/web3";
import pairData from "../utils/abi/PancakePair.json";
export default function usePair(addressToken1: string, addressToken2: string) {

    const Pair = new web3.eth.Contract(pairData.abi as AbiItem[], )

    return Pair;
}