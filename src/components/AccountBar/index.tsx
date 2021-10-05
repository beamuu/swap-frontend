import { useWeb3React } from "@web3-react/core";
import AccountBarContainer from "./AccountBarContainer";
import Inactive from "./Inactive";
import { GoX, AiFillGithub, FiAlertCircle, BsCheckCircle, BsPersonCheckFill } from "react-icons/all";
import Box, { DynamicBox } from "./Box";
import Warning from "./Warning";
import Active from "./Active";

export default function AccountBar() {
    const { chainId, account } = useWeb3React();
    return (
        <AccountBarContainer>
            <div className="d-flex full-height align-items-center">
                <Box><BsPersonCheckFill style={{ fontSize: "23px"}}/></Box>
                <DynamicBox style={{ backgroundColor: "#fff" , color: "#3f3f3f"}}>{account}</DynamicBox>
            </div>
            <div className="d-flex full-height">
                {
                    chainId === 1 ? <Active><BsCheckCircle style={{ fontSize: "23px"}}/></Active> : 
                    <Warning><span className="me-2">Wrong network</span><FiAlertCircle style={{ fontSize: "23px"}}/></Warning>
                }
                
                {/* <Inactive><GoX style={{ fontSize: "23px"}}/></Inactive> */}
                
                <Box><AiFillGithub style={{ fontSize: "23px"}}/></Box>
            </div>

        </AccountBarContainer>
    )
}