import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  margin-top: 15px;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px groove #73dbeb;
  padding: 10px 0;
`;

export const DeleteBtn = styled.button`
width: 100px;
  height: 30px;
  margin-left: 60px;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  font-family: Lato, sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  display: inline-block;
  outline: none;
  position: relative;
  background: #0099FF;
  border: none;
  z-index: 1;
  box-shadow: rgba(255, 255, 255, 0.5) 2px 2px 2px 0px inset,
    rgba(0, 0, 0, 0.1) 7px 7px 20px 0px, rgba(0, 0, 0, 0.1) 4px 4px 5px 0px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #2ba2cd;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
    background: red;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
`;