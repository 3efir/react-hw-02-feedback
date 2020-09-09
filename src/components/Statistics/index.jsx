import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <ul className="statistics__list">
      <li className="statistics__list-item">Good: {good}</li>
      <li className="statistics__list-item">Neutral: {neutral}</li>
      <li className="statistics__list-item">Bad: {bad}</li>
      <li className="statistics__list-item">Total: {total}</li>
      <li className="statistics__list-item">Positive Feedbacks: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}

export default Statistics;
