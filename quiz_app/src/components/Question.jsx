import { useState } from "react";
import Answers from "./Answers"
import QuestionTimer from "./QuestionTImer"
import QUESTIONS from '../questions.js';

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer
}){
  // useState for setAnswers
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  });

  // handleSelectAnswer
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if(answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct': 'wrong';
  } else if(answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id='question'>
        {/* question timer load */}
        <QuestionTimer 
          timeout={10000} 
          onTimeout={onSkipAnswer}
        />
        <h2>
          { QUESTIONS[index].text }
        </h2>
        
        <Answers 
          answers={ QUESTIONS[index].answers }
          selectedAnswer={ answer.selectedAnswer }
          answerState={answerState}
          onSelect={handleSelectAnswer}
          />

      </div>
  )
}