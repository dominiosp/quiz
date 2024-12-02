import React, { useState } from 'react';
import { QuizCard } from './components/QuizCard';
import { Results } from './components/Results';
import { ProgressBar } from './components/ProgressBar';
import { Logo } from './components/Logo';
import { CenteredContainer } from './components/CenteredContainer';
import { quizQuestions } from './data/quizData';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <CenteredContainer>
      <Logo />
      <AnimatePresence mode="wait">
        {!showResults ? (
          <div className="flex flex-col items-center" key="quiz">
            <ProgressBar
              current={currentQuestion}
              total={quizQuestions.length}
            />
            <QuizCard
              question={quizQuestions[currentQuestion]}
              selectedAnswer={selectedAnswer}
              onSelectAnswer={handleAnswer}
              onNextQuestion={handleNextQuestion}
            />
          </div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex justify-center"
          >
            <Results
              score={score}
              totalQuestions={quizQuestions.length}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </CenteredContainer>
  );
}

export default App;