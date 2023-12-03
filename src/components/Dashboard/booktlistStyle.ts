import styled from "styled-components";

export const BookListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Pegination = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    margin-left: 50px;
    button{
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top:5px;
        margin-bottom: 20px;
        border-radius: 5px;
    }
`