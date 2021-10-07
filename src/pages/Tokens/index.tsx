import TokenBox from "./TokenBox";

export default function Tokens() {
    return (
        <div>
            <h5 className="mb-3">Our Official Tokens</h5>
            <div className="d-flex flex-wrap">
                <TokenBox />
                <TokenBox />
                <TokenBox />
            </div>
        </div>
    )
}