import { CustomButton } from "./Button";

interface IConnect {
    connect: () => void
}

export default function Connect({ connect }: IConnect) {
    return (
        <div 
            style={{
                width: "100%",
                height: "100%",
            }}
            className="d-flex justify-content-center align-items-center"
            >
                <div className="container" style={{ height: "60%"}}>
                    <div className="row m-0" style={{ height: "100%"}}>
                        <div className="col-lg d-flex align-items-center">
                            <CustomButton onClick={connect}>Connect Your Wallet {">"}</CustomButton>
                        </div>
                        <div className="col-lg">
                            <img src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" width="100%"/>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}