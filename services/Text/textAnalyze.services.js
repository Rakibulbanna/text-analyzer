function calculateWordCount(text) {
  let count = 0;

  const length = text.length;
  for (let i = 0; i < length; i++) {
    if (text[i] !== " " && (text[i + 1] === " " || i === length - 1)) {
      count++;
    }
  }

  return count;
}

function calculateCharacterCount(text) {
  let count = 0;
  const length = text.length;
  for (let i = 0; i < length; i++) {
    count++;
  }
  return count;
}

function calculateSentenceCount(text) {
  const sentenceEnders = [".", "?", "!"];

  let count = 0;
  const length = text.length;

  for (let i = 0; i < length; i++) {
    //  is the current character is a sentence-ending check
    if (sentenceEnders.includes(text[i])) {
      // is the next character exists and is not a space, increment count
      if (text[i + 1] && text[i + 1] !== " ") {
        count++;
      }
    }
  }

  // Add 1 to count for the last sentence

  if (!sentenceEnders.includes(text[length - 1])) {
    count++;
  }

  return count;
}

function calculateParagraphCount(text) {
  // Split the text based on double new line
  const paragraphs = text.split("\n\n");

  // Filter empty paragraphs
  const nonEmptyParagraphs = paragraphs.filter(
    (paragraph) => paragraph.trim() !== ""
  );

  // Return the count of non-empty paragraphs
  return nonEmptyParagraphs.length;
}

function calculateLongestWords(text) {
  const paragraphs = text
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");
    
  const paragraphsLength = paragraphs.length;
  let longestWord = paragraphs[0] || "",
    longestWordLength = paragraphs[0]?.length || 0;

  for (let i = 0; i < paragraphsLength; i++) {
    const words = paragraphs[i].split(" ").filter((word) => word.trim() !== "");
    const wordsLength = words.length;
    if (wordsLength > longestWordLength) {
      longestWord = words;
      longestWordLength = wordsLength;
    }
  }
  return longestWordLength;
}

module.exports = {
  calculateWordCount,
  calculateCharacterCount,
  calculateSentenceCount,
  calculateParagraphCount,
  calculateLongestWords,
};
