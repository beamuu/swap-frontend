import { web3 } from "../wallet/providers/web3";
import { AbiItem } from 'web3-utils';
import { abi } from "../utils/abi/PancakeFactory.json";
export default function useFactory(factoryAddress: string) {
    const Factory = new web3.eth.Contract(abi as AbiItem[], factoryAddress);
    return Factory;
}