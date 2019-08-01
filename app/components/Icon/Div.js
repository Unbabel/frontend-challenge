import styled from 'styled-components';

import { COLORS } from '../../theme';

export default styled.div`
  color: ${props => `#${props.color}`};
  max-width: ${props => `${props.size}px`};

  &:hover {
    color: #${COLORS.PURPLE};
  }
`;
