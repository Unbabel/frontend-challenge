import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  top: 3px;
  position: relative;
  margin-bottom: 8px;

  > input {
    width: 100%;
    border: none;
    border-bottom: 2px solid transparent;
    outline: none;
    box-sizing: border-box;
    padding: 4px;

    &:focus {
      border-bottom: ${props => `2px solid ${props.theme.blue}`};
    }
  }
`;

export default Div;
