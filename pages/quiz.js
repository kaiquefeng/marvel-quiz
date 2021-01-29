import React from 'react';
import db from '../db.json';

import QuizBackground from '../src/components/QuizBackground';

export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <div>
        Quiz
      </div>
    </QuizBackground>
  );
}
