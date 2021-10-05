import { useContext } from "react";
import styled from "styled-components";
import { SwapContext } from "../../contexts/Swap";

const Button = styled.button`
    background: rgb(255,138,118);
    background: linear-gradient(151deg, rgba(255,138,118,1) 0%, rgba(255,0,134,1) 100%);
    width: 100%;
    height: 70px;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-weight: 600;
`

export default function SwapButton() {

    const { token1, token2, token1Amount, token2Amount } = useContext(SwapContext);

    

    const handleSwapEvent = () => {
        alert(`You will swap your ${token1Amount} ${token1} with ${token2Amount} ${token2}`)
    }
    console.log(token1Amount);
    return (
        <Button onClick={handleSwapEvent} disabled={(token1 && token2 && token1Amount && token2Amount) ? false : true}>{
            (!token1Amount || !token1) ? "Enter an amount" :
                (!token2) ? "Select token" : "Swap now"
                    
        }</Button>
    )
}