import styled from 'styled-components';

export const BookCardContainer = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const BookTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333333;
`;

export const BookInfo = styled.p`
  margin-bottom: 8px;
  font-size: 1.1rem;
  color: #555555;

  strong {
    font-weight: bold;
    margin-right: 6px;
    color: #333333;
  }
  input{
    width: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      background-color: #eeeeee;
    }
  }
`;
