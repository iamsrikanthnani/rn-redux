import styled from 'styled-components/native';
import {spacing} from '@theme/spacing';

type TextProps = {
  color?: string;
  fontSize?: keyof typeof spacing;
};

// Title component with spacing size 'fontPrimary' (24px) and color prop
export const Title = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontPrimary']}px;
  font-weight: 700;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.textPrimary};
`;

// Subtitle component with spacing size 'fontSecondary' (20px) and color prop
export const Subtitle = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontSecondary']}px;
  font-weight: 600;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.textSecondary};
`;

// Label component with spacing size 'fontTertiary' (16px) and color prop
export const Label = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontTertiary']}px;
  font-weight: 700;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.textSecondary};
`;

// Text component with spacing size 'fontQuinary' (12px) and color prop
export const Text = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontQuinary']}px;
  font-weight: 400;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.textPrimary};
`;

// SmallText component with spacing size 'fontSenary' (14px) and color prop
export const SmallText = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontSenary']}px;
  font-weight: 400;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.textSecondary};
`;

// ErrorText component with spacing size 'fontSeptenary' (32px) and color prop
export const ErrorText = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontSeptenary']}px;
  font-weight: 400;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.error};
`;

// CompletedTodo component with spacing size 'fontQuinary' (12px) and color prop
export const CompletedTodo = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontQuinary']}px;
  font-weight: 400;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.grey};
  text-decoration: line-through;
`;

// HighlightedText component with spacing size 'fontQuinary' (12px) and color prop
export const HighlightedText = styled.Text<TextProps>`
  font-size: ${({fontSize}) => spacing[fontSize || 'fontQuinary']}px;
  font-weight: 700;
  color: ${props =>
    props?.color ? props?.theme[props?.color] : props?.theme?.blue};
`;
