const Dicionary = fetch('/słownik.txt')
  .then((response) => response.text())
  .then((text) => text);
// zwraca naszą tablice w wyrazami mającymi 5 liter

export const saveGameDicionary = async () => {
  const data = await Dicionary;
  const pre = data.split('\n');
  const WORD_5_LETTER = pre.filter((word) => word.length === 5);
  return WORD_5_LETTER;
};

// zwraca losowe słow
export const drawFromTheDictionary = async () => {
  const data = await saveGameDicionary();
  const gameWord = data[Math.floor(Math.random() * data.length)];
  return gameWord;
};
