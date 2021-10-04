import styled from "styled-components";

export const Button = styled.button`
    height: 40px;
    background-color: transparent;
    border: solid 1px #0049bf;
    color: #0049bf;
    cursor: pointer;
    border-radius: 7px;
    padding: 0 10px;
    transition: 300ms ease;
    &:hover {
        color: #fff;
        background-color: #0049bf;
    }
`