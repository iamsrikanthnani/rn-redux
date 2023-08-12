import {spacing} from '@theme/spacing';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: ${props => props?.theme?.sizePrimary}px
    ${props => props?.theme?.sizeSecondary}px;
  padding-top: ${props => props?.paddingTop | 0};
`;

export const PageItemContainer = styled.Pressable`
  padding: ${props => props?.theme?.sizePrimary}px;
  border-radius: ${props => props?.theme?.sizePrimary}px;
  border: 1px solid ${props => props?.theme?.secondary};
  background-color: ${props => props?.theme?.textOnPrimary};
  margin: 8px 0px;
`;
