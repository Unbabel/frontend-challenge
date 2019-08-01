import styled from 'styled-components';

const P = styled.p`
  display: inline-flex;
  align-items: center;
  color: ${props => `#${props.color}`};

  span {
    margin: 0 3px;
  }
`;

export default P;
