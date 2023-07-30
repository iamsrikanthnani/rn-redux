import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => props.theme.primary};
  padding: ${props => props.theme.sizeOctonary}px
    ${props => props.theme.sizeSecondary}px
    ${props => props.theme.sizeSecondary}px;
`;
