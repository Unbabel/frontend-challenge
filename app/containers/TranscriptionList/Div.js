import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  position: relative;

  > div:nth-child(2) {
    width: 100%;
    text-align: center;
  }

  ul > li {
    padding: 1.5rem;

    > div > div {
      display: inline-flex;

      > span {
        margin: 0 4px;
      }
    }
  }
`;

export default Div;
