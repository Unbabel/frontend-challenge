import styled from 'styled-components';

const P = styled.p`
  display: inline-flex;
  align-items: center;
  color: ${props => `#${props.color}`};
`;

export default P;
