import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        rows="4"
        placeholder="Enter your text..."
        value={text}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
