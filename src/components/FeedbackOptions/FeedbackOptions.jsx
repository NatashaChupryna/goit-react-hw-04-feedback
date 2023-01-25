import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackList>
      <Button type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </Button>
      <Button type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </Button>
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
