import { Button } from "../components/Button";
import { injected } from "../wallet/connectors";
import { useWeb3React } from "@web3-react/core";
import Pool from "./Pool";
import List from "../components/List";

export default function Application() {

    const { activate, active, account } = useWeb3React();


    async function connect() {
        try {
            activate(injected)
        } catch (error) {
            alert("Can't connect to your wallet.");
        }
    }
    console.log(account)
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }}>
            <div style={{ width: "87vw", height: "100vh" , maxWidth: "2000px" }}>
                {
                    active ? 

                    <HomePage />

                    :

                    <Button onClick={
                        connect
                    }>Connect</Button>
                }
                
            </div>
        </div>
    )
}

function HomePage() {
    return (
        <div 
            className="row mt-5 p-0 pe-3" 
            style={{ 
                backgroundColor: "rgba(255,255,255,0.80)" , 
                borderRadius: "20px",        
            }}>
            <div 
                className="col-3 px-3 py-5" 
                style={{ 
                    backgroundColor: "#ffffff",
                    borderRadius: "20px",  
            }}>
                {/* menu */}
                <List name="Swap" />
                <List name="Pools" />
            </div>

            <div className="col-9 p-5 ">
                
                <Pool />
            </div>
        </div>
    )
}