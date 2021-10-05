import { useContext } from "react"
import { SwapContext } from "../../contexts/Swap";

export default function Input() {

    const { token1, token2, setToken1, setToken1Amount } = useContext(SwapContext);
    const handleSelect = (e: any) => {
        return setToken1(e.target.value);
    }
    const handleAmountChange = (e: any) => {
        return setToken1Amount(e.target.value);
    }
    return (
        <div className="d-flex align-items-center" style={{ width: "100%", height: "70px", backgroundColor: "#ebedf0", margin: "20px 0", padding: "10px", borderRadius: "14px", }}>
            <div className="full-width">
                <h6>From</h6>
                <div className="row m-0 p-0">
                    <div className="col-9 p-0">
                        <input type="number" className="swap-input full-width" placeholder="0.0" onChange={handleAmountChange}/>
                    </div>
                    <div className="col-3 p-0">
                        <select className="full-width swap" onChange={handleSelect}>
                            <option disabled={token2 ? ("TK1" === token2) : false} value="TK1">Token1</option>
                            <option disabled={token2 ? ("TK2" === token2) : false} value="TK2">Token2</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}