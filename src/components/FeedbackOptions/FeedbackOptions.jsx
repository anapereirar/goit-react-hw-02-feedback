import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { Component } from 'react';

class FeedbackOptions extends Component {

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
        <div className={css.feedback}>
          {options.map((option) => (
            <button className={css.btn} key={option} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          ))}
        </div>
      );
    }
  }
  
  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;