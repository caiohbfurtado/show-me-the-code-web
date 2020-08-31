import styled from 'styled-components';

export const Container = styled.button`
  padding: 10px 25px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;

  svg {
    font-size: 18px;
    margin-left: 5px;
  }

  &:hover {
    filter: brightness(75%);
    font-size: 16px;

    svg {
      font-size: 22px;
      margin-left: 7px;
    }
  }
`;
