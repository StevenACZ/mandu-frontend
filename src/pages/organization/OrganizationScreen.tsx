// React
import React from 'react';

// Styles
import { OrganizationScreenStyled } from './Styles';

interface Props {}

const OrganizationScreen: React.FC<Props> = () => {
  return (
    <OrganizationScreenStyled>
      <h1>Hola</h1>
    </OrganizationScreenStyled>
  );
};

export default OrganizationScreen;
