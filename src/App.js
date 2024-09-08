import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  useEffect(()=>{
    axios
    .get('https://opentdb.com/api.php?amount=10')
    .then(res => {setFlashcards(
      res.data.results.map((questionItem, index)=>{
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map(a=> decodeString(a)), 
          answer
        ];
        return {
          id:`${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: questionItem.correct_answer,
          options: options.sort(()=> Math.random() - .5)//adding the .5 will randomize and return 50% of time a positive and the other half a negative number
        }
      })
    )})
  },[])

  function decodeString(str){
    const textArea = document.createElement('textarea')
    textArea.innerHTML=str
    return textArea.value;
  }

  return (
    <div className="container">
      <FlashcardList flashcards = {flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
  id: 1,
  question: 'What is 2 + 2?',
  answer: '4',
  options: [
    '2',
    '3',
    '4',
    '5'
  ]
},
{
  id: 2,
  question: 'Question 2?',
  answer: 'Answer',
  options: [
    'Answer option here',
    'Answer option here',
    'Answer option here',
    'Answer option here'
  ]
},
{
  id: 3,
  question: 'Question 3?',
  answer: 'Answer',
  options: [
    'Answer option here',
    'Answer option here',
    'Answer option here',
    'Answer option here'
  ]
}
]
export default App;
