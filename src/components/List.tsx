import styled from "styled-components";

interface IList {
    name: string;
    active: boolean;
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    border-radius: 10px;


`

export default function List({ name, active }: IList) {
    return (
        <Container>
            { name }
        </Container>
    )
}