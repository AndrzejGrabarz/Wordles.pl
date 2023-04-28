export const CORRECT_WORD = 'GORYL';
export const ROW_COUNT = 2;
export const COL_COUNT = 5;
export const GAME_MSGS = {
  win: 'Wygrałeś! Gratulacje.',
  loss: 'Niestety, fiasko. Zagraj jeszcze raz.',
};
export const SPECIAL_KEYS = ['enter', 'delete', 'meta', 'tab', ''];
export const LETTERS_ALLOWED = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  'Ą',
  'Ć',
  'Ę',
  'Ł',
  'Ń',
  'Ó',
  'Ś',
  'Ź',
  'Ż',
];

export const isLetter = (key) => LETTERS_ALLOWED.includes(key.toUpperCase());
export const prepareBoard = () => {
  return [...Array(ROW_COUNT).keys()].map((_) => {
    return {
      checked: false,
      letters: [],
    };
  });
};
