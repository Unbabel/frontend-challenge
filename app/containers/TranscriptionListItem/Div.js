import styled from 'styled-components';

const Div = styled.div`
  height: 100%;
  padding: ${props => props.theme.gutterRule};

  article {
    display: flex;
    align-items: flex-start;
    background-color: white;

    > div:first-of-type {
      display: flex;
      align-items: center;
      margin-right: 8px;

      > label {
        top: 4px;
        margin-right: 10px;
      }
    }

    > div:nth-child(2) {
      width: 100%;
    }

    > div:nth-child(3) {
      visibility: hidden;
    }
  }

  &:hover article > div:nth-child(3) {
    visibility: visible;
  }
`;

export default Div;
