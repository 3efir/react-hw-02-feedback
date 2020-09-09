import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  const leaveFeedback = (option) => {
    onLeaveFeedback(option);
  };

  return (
    <ul className="feedback-options__list">
      {options.map((option) => (
        /* Using uuid is a bad practics, but I need some unic key for this list */
        <li className="feedback-options__list-item" key={uuidv4()}>
          <button
            className="feedback-options__btn"
            onClick={(e) => leaveFeedback(option)}
            type="button"
          >{option}</button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
