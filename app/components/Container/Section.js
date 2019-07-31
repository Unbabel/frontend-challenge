import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100%;
  max-width: ${props => props.theme.maxWidthRule};
  margin: 0 auto;
`;

export default Section;
