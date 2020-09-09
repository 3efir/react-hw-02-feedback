import React, { Component } from 'react';
import Section from './components/Section';
import './App.scss';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (key) => {
    let tempState = this.state;
    tempState[key] += 1;
    this.setState(tempState)
  }

  getTotal = () => {
    return Object.values(this.state).reduce((acc, current) => acc + current);
  }

  getPositivePercentage = () => {
    const total = this.getTotal();
    return (this.state.good / total * 100).toFixed(0);
  }

  checkFeedbacksAvability = () => {
    return this.state.good || this.state.neutral || this.state.bad;
  }

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section
          title="Statistics"
        >
          {this.checkFeedbacksAvability() ? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.getTotal()}
            positivePercentage={this.getPositivePercentage()}/> : <Notification message="No feedback given"/>}
        </Section>
      </>
    );
  }
}

export default App;
