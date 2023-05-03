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
    "Enter",
    "Delete",
    "Backspace"
]

export const WORD_DRAFTED= [
    'GORYL',
    'GOGLE',
    'NARTY',
    'KORAL',
    'DYMEK',
    'WÓZEK',
    'URODA',
    'FOTEL',
    'ELEKT',
    'CIAŁO',
    'OWIES',
    'OSHEE',
    'ZIAJA',
    'BOLEC',
    'DUSZA',
    'FILMY',
    'FIRMY'
]

export let WORD_TO_GUESS = WORD_DRAFTED[Math.floor(Math.random()*WORD_DRAFTED.length)]

export const ROW_COUNT = 6;
export const COL_COUNT = 5; 

export const KEYBOARD = [
    ["Q", 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O','P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ["Enter", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
    ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż']
  ];

export const endgame = () => {
    return window.location.reload()
 }

export const nextGameWin = () =>{
    setTimeout(()=>{
        if(confirm("You win!!!!!!!! Dou you want one more game?")){
          endgame()
        }else{
          alert("You sure?")
        }
       },400)
}

export const nextGameLose = () =>{
    setTimeout(()=>{
        if(confirm("You lose :( Don't worry play one more time!")){
          endgame()
        }else{
          alert("You sure?")
        }
       },400)
}