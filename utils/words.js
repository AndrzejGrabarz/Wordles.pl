export const CORRECT_WORD = 'GORYL';
export const ROW_COUNT = 2;
export const COL_COUNT = 5;
export const GAME_MSGS = {
  win: 'Wygrałeś! Gratulacje.',
  loss: 'Niestety, fiasko. Zagraj jeszcze raz.',
};
export const SPECIAL_KEYS = ['enter', 'delete', 'meta', 'tab', ''];
export const LETTERS_ALLOWED = [
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
];

export const KEYBOARD = [
  [...LETTERS_ALLOWED.slice(0, 10)],
  [...LETTERS_ALLOWED.slice(10, 19)],
  ['Enter', ...LETTERS_ALLOWED.slice(19, 26), 'Delete'],
  [...LETTERS_ALLOWED.slice(26, 35)],
];

export const isLetter = (key) => LETTERS_ALLOWED.includes(key);

export const prepareBoard = () => {
  return [...Array(ROW_COUNT).keys()].map((_) => {
    return {
      checked: false,
      letters: [],
    };
  });
};

export const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};
