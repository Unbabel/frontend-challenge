import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidthRule};
  margin: 0 auto;
  padding: ${props => (props.gutter ? props.theme.gutterRule : 0)};
`;

export default Wrapper;
