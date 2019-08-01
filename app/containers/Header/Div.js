import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div ~ div {
    padding-left: ${props => props.theme.gutterRule};
  }
`;
