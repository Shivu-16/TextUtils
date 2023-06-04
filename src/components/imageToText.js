import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

const ImageToText = () => {
  const [extractedText, setExtractedText] = useState('');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const worker = createWorker({
      logger: (m) => console.log(m), // Optional logger function
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(file);
    setExtractedText(text);
    await worker.terminate();
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <div>{extractedText}</div>
    </div>
  );
};

export default ImageToText;
