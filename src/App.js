import "./App.css";
import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "Where did today's theater begin?",
      answerOptions: [
        { answerText: "In ancient Agypt", isCorrect: false },
        { answerText: "In ancient Greece", isCorrect: true },
        { answerText: "In ancient Rome", isCorrect: false },
      ],
    },
    {
      questionText: "Do you know the famous phrase for a theater stage?",
      answerOptions: [
        { answerText: "The ground that comes from heaven.", isCorrect: false },
        { answerText: "The boards that mean the world.", isCorrect: false },
        { answerText: "The boards that dreams are made of", isCorrect: true },
      ],
    },
    {
      questionText:
        "To be or not to be - that is the question! But who is the author of the play in which this question is asked?",
      answerOptions: [
        { answerText: "Goethe", isCorrect: false },
        { answerText: "Shakespeare", isCorrect: true },
        { answerText: "Schiller", isCorrect: false },
      ],
    },
    {
      questionText: "What kind of stage do many large theaters have?",
      answerOptions: [
        { answerText: "A revolving Stage", isCorrect: true },
        { answerText: "A fall stage", isCorrect: false },
        { answerText: "A swinging stage", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {false ? (
        <div className="score-section">
          You scored 1 out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              Do you know the famous phrase for a theater stage?
            </div>
          </div>
          <div className="answer-section">
            <button>In ancient Agypt</button>
            <button>In ancient Greece</button>
            <button>In ancient Rome</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
