import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';

export const Profile: React.FC = () => {
  const login = useAppSelector(authSelectors.getLogin);

  return (
    <Wrap>
      <div>Вы вошли в систему под именем:</div>
      <h1>{login}</h1>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
