import styled from 'styled-components';

export default styled.div`
  color: ${props => `#${props.color}`};
  max-width: ${props => `${props.size}px`};
`;
