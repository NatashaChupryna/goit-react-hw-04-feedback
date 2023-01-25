import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import {FeedbackList, Button} from './FeedbackOptions.styled'


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackList>
{options.map((option) => {
        return (
            <li key={nanoid()}>
          <Button
            onClick={() => onLeaveFeedback(option)}
            type="button">
            {option}
          </Button>
          </li>
        );
      })}
        </FeedbackList>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };