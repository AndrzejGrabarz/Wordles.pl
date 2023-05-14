const Dictionary = async () => {
  const response = await fetch('/słownik_lista.json');
  const json = await response.json();
  return json.strings;
};
// zwraca naszą tablice w wyrazami mającymi 5 liter

export const saveGameDictionary = async () => {
  const data = await Dictionary();
  const WORD_5_LETTER = data.filter((word) => word.length === 5);
  return WORD_5_LETTER;
};

// zwraca losowe słow
export const drawFromTheDictionary = async () => {
  const data = await saveGameDictionary();
  const gameWord = data[Math.floor(Math.random() * data.length)];
  return gameWord;
};
