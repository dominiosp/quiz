import React from 'react';
import { motion } from 'framer-motion';

interface CenteredContainerProps {
  children: React.ReactNode;
}

export const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};