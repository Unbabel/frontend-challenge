import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  box-sizing: border-box;
  padding: 4px;
  color: ${props => props.theme.transcriptionTitleColor};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0;

  &:focus {
    border-bottom: ${props => `2px solid ${props.theme.blue}`};
  }
`;

export default Input;
