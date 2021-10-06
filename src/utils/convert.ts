import { web3 } from "../wallet/providers/web3"

export const toWei = (_amount: string) => {
    return web3.utils.toWei(_amount, "ether");
}
export const fromWei = (_amount: string) => {
    return web3.utils.fromWei(_amount, "ether");
}