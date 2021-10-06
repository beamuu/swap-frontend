declare let window: any;

export const useMetamaskTransaction = (from: string | null | undefined, to: string | null | undefined, data?: string, value?: string) => {
    const txParams = {
        from: from,
        to: to,
        data: data,
        value: value,
    }
    return window.ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams]
    })
    .catch((err: any) => {
        throw new Error(err);
    })
}
