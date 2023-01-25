import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { AppComponent } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad } = this.state) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good } = this.state) => {
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <AppComponent>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
{this.countTotalFeedback() ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>) : (<Notification message='No feedback yet'></Notification>) }

          
        </Section>
      </AppComponent>
    );
  }
}
