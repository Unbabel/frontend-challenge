import styled from 'styled-components';

import Section from 'components/Container/Section';

export default styled.main`
  height: auto;

  > ${Section} {
    width: auto;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
