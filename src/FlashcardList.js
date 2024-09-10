import React from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
  //props.flashcards destructured
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
}
