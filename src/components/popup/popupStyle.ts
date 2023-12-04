import styled from "styled-components";
export const PopupContainer = styled.div`
  position: fixed;
  border-radius: 10px;
  width: 30%;
  height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Input =styled.input`
    margin: 10px;
    width: 50%;
    padding: 5px;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid grey;
    border-radius: 4px;
`

export const PopupInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 10px;
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
  margin: auto;
  background: white;
  text-align: center;
  padding: 20px;

  input {
    margin: 10px;
    width: 50%;
    padding: 5px;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid var(--input-border);
    border-radius: 4px;
  }

  select{
    margin: 10px;
    width: 50%;
    padding: 5px;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
  }
`;

export const PopupHeading = styled.div`
font-size: 22px;
  margin: 0;
  padding: 10px;
  text-transform:capitalize;
`;

export const CloseButton = styled.button`
  padding: 8px 16px;
  margin-top: 20px;
  cursor: pointer;
`;
