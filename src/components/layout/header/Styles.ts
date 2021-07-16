import styled from 'styled-components';
import { color } from '../../../theme/variables';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.colorGreyLight1};
  height: 72px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  width: 1000px;
  height: 40px;

  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
  }
`;
