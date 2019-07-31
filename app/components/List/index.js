import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import Ul from './Ul';
import Div from './Div';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => <ComponentToRender key={`item-${item.id}`} item={item} />);
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Div theme={useContext(ThemeContext)}>
      <Ul>{content}</Ul>
    </Div>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
