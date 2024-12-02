import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../types/quiz';
import { CheckCircle2, XCircle } from 'lucide-react';
import Confetti from 'react-confetti';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  onNextQuestion: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  onNextQuestion,
}) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer !== null) return;
    
    onSelectAnswer(index);
    setShowExplanation(true);
    
    if (index === question.correctAnswer) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const getBackgroundStyle = (option: { text: string; image?: string; color?: string }) => {
    if (option.color) {
      return { backgroundColor: option.color };
    }
    return option.image ? { backgroundImage: `url(${option.image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          {question.question}
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correctAnswer;
            const isSelected = selectedAnswer === index;
            const showResult = selectedAnswer !== null;

            return (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-lg transition-all ${
                  showResult
                    ? isCorrect
                      ? 'ring-4 ring-green-400'
                      : isSelected
                      ? 'ring-4 ring-red-400'
                      : 'opacity-60'
                    : 'hover:ring-4 hover:ring-purple-400'
                }`}
              >
                <div 
                  className="aspect-square w-full h-full"
                  style={getBackgroundStyle(option)}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
                  <span>{option.text}</span>
                  {showResult && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2">
                      {isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                      {!isCorrect && isSelected && <XCircle className="w-5 h-5 text-red-400" />}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6"
            >
              <p className="text-gray-700 bg-purple-50 p-4 rounded-lg">
                {question.explanation}
              </p>
              <button
                onClick={() => {
                  setShowExplanation(false);
                  onNextQuestion();
                }}
                className="mt-4 w-full bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Próxima Pergunta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};