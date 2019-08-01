import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  outline: 0;
  font-size: 16px;

  border: ${props => (props.isFlat ? 'none' : 'inherit')};

  &:active {
    transform: translateY(1px);
  }
`;

export default StyledButton;
