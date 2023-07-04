import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // //HANDLE FUNCTIONS NOT NEEDED
  // incrementGood = () => {
  //   this.setState({ good: this.state.good + 1 });
  // };

  // incrementNeutral = () => {
  //   this.setState({ neutral: this.state.neutral + 1 });
  // };

  // incrementBad = () => {
  //   this.setState({ bad: this.state.bad + 1 });
  // };

  //TOTAL FEEDBACK
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  //POSITIVE PERCENTAGE
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  //COMMENT INCREMENTER
  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        position: 'absolute',  
        top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
      }}>
        <Section title = "Please leave feedback" >
           <FeedbackOptions
           options={['good', 'neutral', 'bad']}
           onLeaveFeedback={this.onLeaveFeedback}
         /> 
         {this.countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
   ):(
        <Notification message="No hay comentarios" />
        )} 
        </Section>
      </div>
    );
  }
}

export default App;
