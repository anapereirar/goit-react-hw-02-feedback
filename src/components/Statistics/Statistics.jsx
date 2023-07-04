import React from 'react';
import PropTypes from 'prop-types'
import { Component } from 'react';
import css from './Statistics.module.css'

class Statistics extends Component {

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <ul className={css.statistics}>
        <li><h2>Statistics</h2></li>
        <li>Good: {good}</li>
        <li>Neutral: {neutral} </li>
        <li>Bad: {bad} </li>
        <li>Total: {total} </li>
        <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    Bad: PropTypes.number.isRequired,
    Total: PropTypes.number.isRequired,
}


export default Statistics;
