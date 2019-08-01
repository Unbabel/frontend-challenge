import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Transition, TransitionGroup } from 'react-transition-group';

const ToastContext = React.createContext();
const { Consumer, Provider } = ToastContext;

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export class ToastProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.components !== this.props.components) {
      this.cacheComponents(nextProps.components);
    }
  }

  cacheComponents = components => {
    this.components = {
      ...components,
    };
  };
}

ToastContext.propTypes = {};

ToastContext.defaultProps = {
  autoDismissTimeout: 5000,
  components: defaultComponents,
  placement: 'top-right',
  transitionDuration: 220,
};
