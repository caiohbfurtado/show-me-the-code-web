import React from 'react';

import * as S from './styles';

function Button({ children, onClick }) {
  return <S.Container onClick={onClick}>{children}</S.Container>;
}

export default Button;
