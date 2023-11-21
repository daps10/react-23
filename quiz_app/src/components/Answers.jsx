import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
  // shuffleAnswer to useRef
  const shuffledAnswers = useRef();
  
  // shuffled answers
  if(!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  
  return (
    <ul id='answers'>
      { shuffledAnswers.current.map((answer) => {
        // check the answer is selected or not
        let isSelected = selectedAnswer === answer;
        
        // css classes dynamically updated 
        let cssClasses = '';
        if(answerState === 'answered' && isSelected) {
          cssClasses='selected';             
        } 
        if((answerState === 'correct' || answerState ==='wrong') && isSelected) {
          cssClasses= answerState;
        }

        return <li key={answer} className='answer'>  
        <button 
          onClick={() => onSelect(answer)}
          className={cssClasses}
        > { answer }
        </button>
      </li>

      })}
    </ul>
  );
}