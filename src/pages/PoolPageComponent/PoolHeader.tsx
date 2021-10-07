import styled from "styled-components";

interface IPoolHeader {
    name: string | undefined;
    address: string | undefined;
}

const PoolHeaderContainer = styled.div`
    width: 100%;
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    background: rgb(255,138,118);
    background: linear-gradient(151deg, rgba(255,138,118,1) 0%, rgba(255,0,134,1) 100%);
`

export default function PoolHeader({ name, address }: IPoolHeader) {
    return (
        <PoolHeaderContainer>
            <h1 className="mb-3">{name}</h1>
            <p>at: {address}</p>
        </PoolHeaderContainer>
    )
}