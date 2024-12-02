import React from 'react';
import { Trophy } from 'lucide-react';
import Confetti from 'react-confetti';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const percentage = (score / totalQuestions) * 100;
  const hasDiscount = score === totalQuestions;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
      {hasDiscount && <Confetti numberOfPieces={200} recycle={false} />}
      <Trophy className="w-16 h-16 mx-auto mb-4 text-purple-600" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Quiz Completo!
      </h2>
      <p className="text-xl mb-6">
        Você acertou {score} de {totalQuestions} questões ({percentage.toFixed(0)}%)
      </p>
      <div className="space-y-4">
        {hasDiscount ? (
          <>
            <p className="text-green-600 font-semibold text-lg">
              Parabéns! Você ganhou 85% de desconto! 🎉
            </p>
            <a
              href="https://www.sephora.com.br/rare-beauty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              GARANTIR MEU DESCONTO
            </a>
          </>
        ) : (
          <>
            {score >= 3 ? (
              <p className="text-blue-600 font-semibold">
                Quase lá! Tente novamente para ganhar 85% de desconto! 🌟
              </p>
            ) : (
              <p className="text-purple-600 font-semibold">
                Continue tentando para ganhar seu desconto! ✨
              </p>
            )}
            <button
              onClick={onRestart}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Tentar Novamente
            </button>
          </>
        )}
      </div>
    </div>
  );
};