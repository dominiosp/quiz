export interface Option {
  text: string;
  image?: string;
  color?: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: number;
  explanation: string;
}