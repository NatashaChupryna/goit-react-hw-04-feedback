import React from 'react';
import {TotalText} from './Statistics.styled'
// import PropTypes from 'prop-types';

export const Statistics = function ({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <TotalText>Total : {total}</TotalText>
      <TotalText>Positive feedback : {percentage}%</TotalText>
    </div>
  );
};

// Statistics.PropTypes={
//     good: PropTypes.number.isRequired, 
//     neutral:PropTypes.number.isRequired,  
//     bad: PropTypes.number.isRequired, 
//     total: PropTypes.func.isRequired,
//     percentage:PropTypes.func.isRequired,,
// }