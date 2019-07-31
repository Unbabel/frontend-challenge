import styled from 'styled-components';

export default styled.svg`
  color: ${props => `${props.color}`};
  max-width: ${props => `${props.size}px`};
`;
