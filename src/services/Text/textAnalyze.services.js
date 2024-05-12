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
  return text.length;
}

function calculateSentenceCount(text) {
  const sentenceEndsWith = [".", "?", "!"];
  const regex = new RegExp("[" + sentenceEndsWith.join("") + "]", "g");

  // Getting sentence with endpoints
  const sentences = text.split(regex);

  // filtering empty sentence from sentences
  const validSentences = sentences.filter((sentence) => sentence.trim() !== "");

  return validSentences.length;
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

  let longestWord = "",
    longestWordLength = 0;

  for (const paragraph of paragraphs) {
    const words = paragraph.split(" ").filter((word) => word.trim() !== "");

    for (const word of words) {
      const wordsLength = word.length;
      if (wordsLength > longestWordLength) {
        longestWord = word;
        longestWordLength = wordsLength;
      }
    }
  }
  return longestWord;
}

module.exports = {
  calculateWordCount,
  calculateCharacterCount,
  calculateSentenceCount,
  calculateParagraphCount,
  calculateLongestWords,
};
