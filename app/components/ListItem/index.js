import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Item from './Item';
import Li from './Li';

function ListItem(props) {
  return (
    <Li theme={useContext(ThemeContext)}>
      <Item>{props.item}</Item>
    </Li>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
