import { Question } from '../types/quiz';
import { shuffle } from '../utils/shuffle';

const originalQuestions = [
  {
    id: 1,
    question: "Que cor é o logo da Rare Beauty?",
    options: [
      { text: "Roxo", color: "#8B5CF6" },
      { text: "Azul", color: "#3B82F6" },
      { text: "Rosa", color: "#EC4899" },
      { text: "Vermelho", color: "#EF4444" }
    ],
    correctAnswer: 2,
    explanation: "O logo da Rare Beauty é rosa, representando a feminilidade e delicadeza da marca!"
  },
  {
    id: 2,
    question: "Qual dessas celebridades criou a Rare Beauty?",
    options: [
      { text: "Kylie Jenner", image: "https://i.imgur.com/YPOyVwY.jpg" },
      { text: "Taylor Swift", image: "https://i.imgur.com/qqEOJJw.jpg" },
      { text: "Ariana Grande", image: "https://i.imgur.com/qqEOJJw.jpg" },
      { text: "Selena Gomez", image: "https://i.imgur.com/YPOyVwY.jpg" }
    ],
    correctAnswer: 3,
    explanation: "Selena Gomez é a fundadora da Rare Beauty! Ela criou a marca em 2020."
  },
  {
    id: 3,
    question: "Qual desses é um produto famoso da Rare Beauty?",
    options: [
      { text: "Delineador", image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop" },
      { text: "Base", image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=400&h=400&fit=crop" },
      { text: "Batom matte", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop" },
      { text: "Blush líquido", image: "https://images.unsplash.com/photo-1617422275560-32cc90d8dfe9?w=400&h=400&fit=crop" }
    ],
    correctAnswer: 3,
    explanation: "O blush líquido Soft Pinch é um dos produtos mais populares da marca!"
  },
  {
    id: 4,
    question: "A Rare Beauty se preocupa com:",
    options: [
      { text: "Tecnologia", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop" },
      { text: "Moda", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop" },
      { text: "Esportes", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop" },
      { text: "Saúde Mental", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop" }
    ],
    correctAnswer: 3,
    explanation: "A marca tem um forte compromisso com a saúde mental e bem-estar!"
  },
  {
    id: 5,
    question: "Onde você pode comprar produtos Rare Beauty no Brasil?",
    options: [
      { text: "Farmácia", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop" },
      { text: "Lojas de roupas", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=400&fit=crop" },
      { text: "Supermercado", image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=400&fit=crop" },
      { text: "Sephora", image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=400&h=400&fit=crop" }
    ],
    correctAnswer: 3,
    explanation: "A Sephora/Rare Beauty é a revendedora oficial da marca no Brasil, com descontos de até 85% em produtos selecionados!"
  }
];

// Remove the shuffle to keep correct answers in their original positions
export const quizQuestions: Question[] = originalQuestions;