import styled from 'styled-components';

export const DashboardContainer = styled.div`
  background-color: #e5e7eb;
  display: flex;
  gap: 10px;
  height: 90%;
  width: 90%;
  border-radius: 10px;
  margin: 2.5% 2.5% 2.5% 2.5%;
`;

export const Sidebar = styled.div`
  flex: 0 0 25%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;

  select{
    margin: 10px;
    width: 90%;
    padding: 5px;
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
  /* padding-left: 50px; */
`;

export const StyledButton = styled.button`
  padding: 12.5px 30px;
  border: 0;
  border-radius: 10px;
  background-color: #2ba8fb;
  color: #ffffff;
  font-weight: bold;
  transition: all 0.5s;
  width: 90%;
  margin: 5px;
  -webkit-transition: all 0.5s;
  &:hover {
    background-color: #6fc5ff;
    box-shadow: 0 0 20px rgba(111, 197, 255, 0.5);
    transform: scale(1.1);
  }
  &:active {
    background-color: #3d94cf;
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }
`;