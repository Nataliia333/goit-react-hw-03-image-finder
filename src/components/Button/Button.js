import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles.LoadMore_button}
        onClick={this.props.onSubmit}
      >
        Load more
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
