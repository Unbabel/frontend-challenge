import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  box-sizing: border-box;
  padding: 4px;
  height: ${props => `${props.height - 3}px`};
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.transcriptionBodyColor};

  &:focus {
    border-bottom: ${props => `2px solid ${props.theme.blue}`};
  }
`;

export default TextArea;
