import styled from 'styled-components';

import Section from 'components/Container/Section';

export default styled.nav`
  display: flex;
  box-shadow: ${props => props.theme.boxShadow};

  ${Section} {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
`;
