import {spacing} from '@theme/spacing';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: ${props => props?.theme?.sizeSenary}px
    ${props => props?.theme?.sizeSecondary}px;
`;
