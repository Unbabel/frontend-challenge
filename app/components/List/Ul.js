import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  margin: ${props => `${props.theme.gutterRule} 0`};
  border: ${props => `1px solid ${props.theme.greyLighter}`};
`;

export default Ul;
