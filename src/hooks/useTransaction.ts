declare let window: any;

export const metamaskTransaction = async (from: string | null | undefined, to: string | null | undefined, data?: string, value?: string): Promise<string> => {
    const txParams = {
        from: from,
        to: to,
        data: data,
        value: value,
    }
    return await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams]
    })
    .catch((err: any) => {
        throw new Error(err);
    })
}
