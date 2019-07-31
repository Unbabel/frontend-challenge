import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Li from './Li';

function ListItem(props) {
  return (
    <Li>
      <Item>{props.item}</Item>
    </Li>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
};

export default ListItem;
