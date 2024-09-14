import React from 'react';
import Flashcard from './components/Flashcard';
import './App.css';

function App() {
  const flashcards = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the largest planet in the solar system?', answer: 'Jupiter' },
    { question: 'What is the chemical symbol for water?', answer: 'H2O' },
  ];

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <div className="flashcard-grid">
        {flashcards.map((card, index) => (
          <Flashcard key={index} question={card.question} answer={card.answer} />
        ))}
      </div>
    </div>
  );
}

export default App;
