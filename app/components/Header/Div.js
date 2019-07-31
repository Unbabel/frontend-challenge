import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > *:first-child {
    padding-right: ${props => props.theme.gutterRule};
  }
`;
