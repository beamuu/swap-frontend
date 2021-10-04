import styled from "styled-components";

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
    return (
        <Button>Swap</Button>
    )
}