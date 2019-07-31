import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
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
`;

export default Div;
