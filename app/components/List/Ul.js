import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  margin: ${props => `0 0 ${props.theme.gutterRule}`};
  border: ${props => `1px solid ${props.theme.greyLighter}`};
`;

export default Ul;
