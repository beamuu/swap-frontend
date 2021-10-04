import styled from "styled-components";

export const Button = styled.button`
    margin: 5px;
    height: 40px;
    background-color: transparent;
    border: solid 1px #1241ff;
    color: #1241ff;
    cursor: pointer;
    border-radius: 7px;
    padding: 0 10px;
    transition: 300ms ease;
    &:hover {
        color: #fff;
        background-color: #1241ff;
    }
`

export const BlackButton = styled.div`
    background-color: #000;
    width: 100%;
    height: 40px;
    text-align: center;
    color: #fff;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`