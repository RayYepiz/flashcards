import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <div className="App">
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
