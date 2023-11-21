import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTImer';
import Answers from './Answers';

export default function Quiz() {


  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  // handleSelect Answer
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    // set answer state
    setAnswerState('answered')
    
    // set user selected answers
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    // setTimeout to change color of selected answer after 1 second.
    setTimeout(() => {
      if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct')
      } else {
        setAnswerState('wrong');
      }

      // settimeout once the answer has been selected
      setTimeout(() => {
        setAnswerState('');
      }, 2000)
    }, 1000);

  }, [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if(quizIsComplete) {
    return (
      <div id='summary'>
        <img src={ quizCompleteImg } alt='Trophy icon'/>
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <div id='question'>
        {/* question timer load */}
        <QuestionTimer 
          key={ activeQuestionIndex }
          timeout={10000} 
          onTimeout={handleSkipAnswer}
        />
        <h2>
          { QUESTIONS[activeQuestionIndex].text }
        </h2>
        
        <Answers 
          key={activeQuestionIndex}
          answers={ QUESTIONS[activeQuestionIndex].answers }
          selectedAnswer={ userAnswers[userAnswers.length - 1] }
          answerState={answerState}
          onSelect={handleSelectAnswer}
          />

      </div>
    </div>
  );
};