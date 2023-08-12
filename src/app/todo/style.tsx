import {spacing} from '@theme/spacing';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: ${props => props?.theme?.sizePrimary}px
    ${props => props?.theme?.sizeSecondary}px;
`;

export const TodoItem = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => props?.theme?.sizePrimary + props?.theme?.sizeMini}px
    ${props => props?.theme?.sizeSecondary}px;
  border-radius: ${props => props?.theme?.sizePrimary}px;
  background-color: ${props => props?.theme?.primary};
  margin: ${props => props?.theme?.sizeMini}px 0;
  align-items: center;
`;

export const TodoTitle = styled.Text`
  font-size: ${props => props?.theme?.sizeQuinary}px;
`;

export const AddTodoContainer = styled(Animated.View)`
  flex-direction: row;
  background-color: ${props => props?.theme?.textOnPrimary};
  padding: ${props => props?.theme?.sizePrimary}px
    ${props => props?.theme?.sizeSecondary}px
    ${props => props?.theme?.sizeSecondary}px;
`;

export const AddTodoInput = styled.TextInput`
  margin: ${props => props?.theme?.sizePrimary}px;
  background-color: ${props => props?.theme?.textOnPrimary};
  flex: 1;
  height: ${props => props?.theme?.sizeSecondary * 2}px;
  padding: ${props => props?.theme?.sizePrimary}px;
  border-radius: ${props => props?.theme?.sizePrimary}px;
  border: ${props => props.theme.sizeMini - 3}px solid
    ${props => props?.theme?.grey};
  align-items: center;
  justify-content: center;
`;

export const AddTodoButton = styled.Pressable`
  align-self: center;
`;

export const CircleBar = styled.View<{isCompleted: boolean}>`
  width: ${props => props.theme.sizeTertiary}px;
  height: ${props => props.theme.sizeTertiary}px;
  border-radius: ${props => props.theme.sizePrimary}px;
  border-width: ${props => props.theme.sizeMini - 3}px;
  border-color: ${props => (props.isCompleted ? 'transparent' : 'black')};
  background-color: ${props =>
    props.isCompleted ? props.theme.done : 'transparent'};
  margin-right: ${props => props.theme.sizePrimary}px;
  align-items: center;
  justify-content: center;
`;

export const TodoItemRowContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SpaceContainer = styled.View`
  padding: ${props => props.theme.sizeTertiary}px;
`;
