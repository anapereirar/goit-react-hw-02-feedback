import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Notification.module.css'

class Notification extends Component {
    render() {
        const {message} = this.props;
        return (
          <h2 className={css.notification}>{message}</h2>
        )
      }
    }

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;