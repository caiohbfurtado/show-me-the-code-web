import React from 'react';
import { FiPhoneForwarded } from 'react-icons/fi';

import * as S from './styles';

import Button from '../../components/Button';

import logo from '../../assets/logo.png';
import falemais30 from '../../assets/falemais30.png';
import falemais60 from '../../assets/falemais60.png';
import falemais120 from '../../assets/falemais120.png';

function Home() {
  return (
    <S.Container>
      <S.Box>
        <img src={logo} alt="Logotipo Telzir" className="logo" />
        <h2>Conheça nossos planos</h2>
        <S.Row>
          <S.BoxPlan>
            <img src={falemais30} alt="" />
          </S.BoxPlan>
          <S.BoxPlan>
            <img src={falemais60} alt="" />
          </S.BoxPlan>
          <S.BoxPlan>
            <img src={falemais120} alt="" />
          </S.BoxPlan>
        </S.Row>
        <Button>
          Fazer simulação <FiPhoneForwarded />
        </Button>
      </S.Box>
    </S.Container>
  );
}

export default Home;
