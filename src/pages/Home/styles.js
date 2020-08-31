import styled from 'styled-components';

import bgTelzir from '../../assets/bg-telzir.png';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bgTelzir});
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left top;
`;

export const Box = styled.div`
  width: 600px;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.main};

  .logo {
    height: 70px;
    margin-bottom: 30px;
  }

  h2 {
    font-weight: 400;
    line-height: 1;
    text-transform: lowercase;
    font-size: 16px;
  }
`;

export const Row = styled.div`
  margin: 10px 0 20px;
  width: 80%;
  display: flex;
  justify-content: center;
`;

export const BoxPlan = styled.div`
  width: 120px;
  height: 90px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
  transition: all 0.2s;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  img {
    height: 80px;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;
