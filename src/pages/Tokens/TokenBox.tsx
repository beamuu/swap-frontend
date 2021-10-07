import styled from "styled-components";

const TokenBoxContainer = styled.div`
    padding: 20px;
    border-radius: 20px;
    background-color: #fff;
`

const popcat = "https://popcat.click/twitter-card.jpg"
export default function TokenBox() {
    return (
        <TokenBoxContainer className="me-2">
            <div className="row m-0 p-0">
                <div className="col-4">
                    <img src={popcat} height="50px" style={{borderRadius: "50%"}}/>
                </div>
                <div className="col-8">
                    <h3>TK</h3>
                    <p style={{color: "#8a8a8a"}}>Token</p>
                    
                </div>
            </div>
            <p>balance: 32.5647asdfasdf</p>
        </TokenBoxContainer>
    )
}