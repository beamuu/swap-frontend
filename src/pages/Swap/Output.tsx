export default function Output() {
    return (
        <div className="d-flex align-items-center" style={{ width: "100%", height: "70px", backgroundColor: "#ebedf0", margin: "20px 0", padding: "10px", borderRadius: "14px", }}>
            <div className="full-width">
                <h6>To</h6>
                <div className="row m-0 p-0">
                    <div className="col-9 p-0">
                        <input type="number" className="swap-input full-width" placeholder="0.0"/>
                    </div>
                    <div className="col-3 p-0">
                        <select className="full-width swap">
                            <option>Token1</option>
                            <option>Token2</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    )
}