import styled from 'styled-components';

import Section from 'components/Container/Section';

export default styled.main`
  height: 50vh;

  > ${Section} {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    > span {
      font-size: 12rem;
      font-weight: bolder;
      color: ${props => props.theme.greyLight};

      & ~ span {
        font-size: 2rem;
      }
    }
  }
`;
