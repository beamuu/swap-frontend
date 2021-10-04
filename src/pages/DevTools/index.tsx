import { Button } from "../../components/Button";

export default function DevTools() {
    return (
        <div>
            <h3 className="mb-3">Dev tools</h3>
            <div>
                <Button>Mint TK1</Button>
                <Button>Mint TK2</Button>
                <Button>Approve TK1 (router)</Button>
                <Button>Approve TK2 (router)</Button>
            </div>
        </div>
    )
}