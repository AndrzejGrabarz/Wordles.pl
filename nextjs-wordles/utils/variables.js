export const ALLOWED_LETTERS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  'ą',
  'ć',
  'ę',
  'ł',
  'ń',
  'ó',
  'ś',
  'ź',
  'ż',
  'Enter',
  'Delete',
  'Backspace',
];

export const WORD_DRAFT = [
  'goryl',
  'gogle',
  'narty',
  'koral',
  'dymek',
  'wózek',
  'uroda',
  'fotel',
  'elekt',
  'ciało',
  'owies',
  'oshee',
  'ziaja',
  'boleć',
  'dusza',
  'filmy',
  'firmy',
];

export const ROW_COUNT = 6;
export const COL_COUNT = 5;

export const KEYBOARD = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Delete'],
  ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'],
];

// async function readFile() {
//   const response = await fetch('/słownik.txt');
//   const text = await response.text();
//   const words = text.split('\n');
//   const fiveLettersWords = words.filter((word) => word.length === COL_COUNT);
//   return fiveLettersWords;
// }

// const Dicionary = fetch('/słownik.txt')
//   .then((response) => response.text())
//   .then((text) => text);

// const saveDicionary = async () => {
//   const data = await Dicionary;
//   const first = data.split('\n');
//   const second = first.filter((word) => word.length === COL_COUNT);
//   return second;
// };

// const drawFromTheDictionary = async () => {
//   const data = await saveDicionary();
//   const gameWord = data[Math.floor(Math.random() * data.length)];
//   return gameWord;
// };
