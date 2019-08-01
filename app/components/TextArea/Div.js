import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  top: 3px;
  position: relative;
  margin-bottom: 8px;

  > textarea {
    width: 100%;
    border: none;
    border-bottom: 2px solid transparent;
    outline: none;
    box-sizing: border-box;
    padding: 4px;
    min-height: 2rem;
    height: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.transcriptionBodyColor};

    &:focus {
      border-bottom: ${props => `2px solid ${props.theme.blue}`};
    }
  }
`;

export default Div;
